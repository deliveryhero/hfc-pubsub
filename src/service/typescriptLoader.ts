import { Compiler } from 'ts-import';
import { rmdir } from 'fs';
import ora from 'ora';
import { resolve } from 'path';
import { ResourceResolver } from './resourceResolver';

export default class TypescriptLoader {
  public static tsCompiler: Compiler = new Compiler({
    logger: console,
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
    const spinner = ora('require TS files');
    const fileType = subscriptionService.split('.').pop();

    if (fileType === 'js') {
      return require(subscriptionService).default;
    }

    try {
      spinner.start();

      const result = await TypescriptLoader.tsCompiler.compile(
        subscriptionService,
      );

      spinner.clear();

      return result.default;
    } catch (error) {
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
    new Promise(async resolve => {
      rmdir(
        TypescriptLoader.tsCompiler.options.cacheDir,
        { recursive: true },
        async () => {
          resolve();
        },
      );
    });
  public static compileTs = async (tsConfigPath: string) => {
    const subscriptionService = ResourceResolver.getSubscriptionService();
    
    let tsCompiler = TypescriptLoader.tsCompiler;
    if (tsConfigPath) {
      tsCompiler = new Compiler({
        absoluteTsConfigPath: tsConfigPath,
      });
    }
    
    try {
      const spinner = ora('Compiling TS files').start();
      await tsCompiler.compile(subscriptionService);
      spinner.clear();

    } catch (error) {
      console.log('error in compileTs', error);
    }
  };
}
