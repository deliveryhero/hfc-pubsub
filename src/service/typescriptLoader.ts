import { Compiler } from 'ts-import';
import { rmdir } from 'fs';
import ora from 'ora';
import { resolve } from 'path';

export default class TypescriptLoader {
  public static tsCompiler: Compiler = new Compiler({
    flags: [
      '--module commonjs',
      '--esModuleInterop',
      '--allowJs',
      '--experimentalDecorators',
      '--target es6',
      '--emitDecoratorMetadata',
      '--moduleResolution node',
    ],
  });
  public static async requireFile<T>(subscriptionService: string): Promise<T> {
    const spinner = ora('Compiling TS files');
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
}
