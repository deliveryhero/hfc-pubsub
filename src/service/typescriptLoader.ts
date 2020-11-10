import { Compiler } from 'ts-import';
import { existsSync, mkdir, rmdir, writeFile } from 'fs';
import ora from 'ora';
import { join, resolve } from 'path';
import { ResourceResolver } from './resourceResolver';

export default class TypescriptLoader {
  public static tsCompiler: Compiler = new Compiler({
    flags: [
      '--module commonjs',
      '--esModuleInterop',
      '--allowJs',
      '--experimentalDecorators',
      '--target es2019',
      '--emitDecoratorMetadata',
      '--moduleResolution node',
      '--strict',
      '--skipLibCheck',
    ],
  });

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
        TypescriptLoader.tsCompiler.options.cacheDir,
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
  public static cleanCache = () =>
    new Promise(async (resolve, reject) => {
      if (!existsSync(TypescriptLoader.tsCompiler.options.cacheDir)) {
        mkdir(TypescriptLoader.tsCompiler.options.cacheDir, error => {
          error;
          resolve();
        });
      }
      rmdir(
        join(TypescriptLoader.tsCompiler.options.cacheDir, '/**'),
        { recursive: true },
        error => {
          if (error) {
            reject(error);
          }
          resolve();
        },
      );
    });

  public static generateTemporaryConfigFile = async (
    tsConfigPath: string,
    subscriptionService: string,
  ): Promise<string> => {
    return new Promise(resolve => {
      const tempConfigPath = join(
        TypescriptLoader.tsCompiler.options.cacheDir,
        'tempConfig.json',
      );

      const defaultConfig = {
        extends: tsConfigPath,
        compilerOptions: {
          outDir: TypescriptLoader.tsCompiler.options.cacheDir,
          rootDir: '/',
          esModuleInterop: true,
          allowJs: true,
          experimentalDecorators: true,
          target: 'es2019',
          emitDecoratorMetadata: true,
          moduleResolution: 'node',
          module: 'commonjs',
          skipLibCheck: true,
          downlevelIteration: true,
          strict: true,
        },
        include: [subscriptionService],
      };

      writeFile(tempConfigPath, JSON.stringify(defaultConfig), () =>
        resolve(tempConfigPath),
      );
    });
  };

  public static compileTs = async (tsConfigPath?: string) => {
    const absoluteTsConfigPath = tsConfigPath && resolve(tsConfigPath);
    if (absoluteTsConfigPath && !existsSync(absoluteTsConfigPath)) {
      ora("tsConfig File doesn't exist.").fail();
      throw new Error("tsConfig File doesn't exist.");
    }
    const subscriptionService = ResourceResolver.getSubscriptionService();

    if (absoluteTsConfigPath) {
      let tempConfigPath = await TypescriptLoader.generateTemporaryConfigFile(
        absoluteTsConfigPath,
        subscriptionService,
      );
      TypescriptLoader.tsCompiler = new Compiler({
        absoluteTsConfigPath: tempConfigPath,
      });
    }

    const spinner = ora('Compiling TS files').start();
    try {
      await TypescriptLoader.tsCompiler.buildCache(subscriptionService);
      spinner.succeed('TS files Compiled successfully');
    } catch (error) {
      spinner.fail('compilation failed');
      console.log('error in compileTs', error);
    }
  };
}
