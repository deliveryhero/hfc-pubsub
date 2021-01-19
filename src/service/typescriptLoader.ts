import { Compiler } from 'ts-import';
import { existsSync, mkdir, rmdir, writeFile } from 'fs';
import ora from 'ora';
import { join, resolve } from 'path';
import { ResourceResolver } from './resourceResolver';

export default class TypescriptLoader {
  public static cacheDir = ResourceResolver.findCacheFolder();
  public static tsCompiler: Compiler = new Compiler({});

  public static isTsIncluded = (): boolean => {
    const subscriptionService = ResourceResolver.getSubscriptionService();
    const fileType = subscriptionService.split('.').pop();
    return fileType === 'ts';
  };

  public static async requireFile<T>(subscriptionService: string): Promise<T> {
    const fileType = subscriptionService.split('.').pop();

    if (fileType === 'js') {
      return require(subscriptionService).default;
    }

    const spinner = ora('reading TS file content').start();
    try {
      const result = await TypescriptLoader.tsCompiler.compile(
        subscriptionService,
      );
      spinner.succeed('TS file loaded');
      return result.default;
    } catch (error) {
      spinner.fail('Error while reading TS file: ' + subscriptionService);
      console.log('error in requireFile', error);
      const service = require(resolve(
        TypescriptLoader.cacheDir,
        subscriptionService.replace(/\.[^/.]+$/, '.js'),
      )).default;

      return service;
    }
  }

  /**
   * clear cache folder
   * without clearing, other event files (beside subscription.service.ts) don't compile again and it doesn't detect changes in them correctly
   * @returns Promise
   */
  public static cleanCache = (): Promise<void> =>
    new Promise(async (resolve, reject) => {
      rmdir(join(TypescriptLoader.cacheDir), { recursive: true }, error => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });

  public static compileTs = async (tsConfigPath?: string) => {
    const absoluteTsConfigPath = tsConfigPath && resolve(tsConfigPath);
    if (absoluteTsConfigPath && !existsSync(absoluteTsConfigPath)) {
      ora("tsConfig File doesn't exist.").fail();
      throw new Error("tsConfig File doesn't exist.");
    }
    const subscriptionService = ResourceResolver.getSubscriptionService();

    if (absoluteTsConfigPath) {
      const yourTsConfigJson = await import(absoluteTsConfigPath);
      TypescriptLoader.tsCompiler = new Compiler({
        compilerOptions: {
          ...yourTsConfigJson.compilerOptions,
          noEmit: false,
          outDir: TypescriptLoader.cacheDir,
        },
      });
    }
    const spinner = ora('Compiling TS files').start();
    try {
      await TypescriptLoader.tsCompiler.compile(subscriptionService);
      spinner.succeed('TS files Compiled successfully');
    } catch (error) {
      spinner.fail('compilation failed');
      console.log('error in compileTs', error);
    }
  };
}
