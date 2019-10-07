let path = require('path');
let exec = require('child_process').exec;

describe('subscriptions cli', () => {
    it('should list subscriptions', async () => {
        let result = await cli(['list']);
        console.log(result);
    })
});
function cli(args, cwd) {
    return new Promise(resolve => { 
      exec(`node ${path.resolve('../dist/src/cli/subscriptions')} ${args.join(' ')}`,
      { cwd }, 
      (error, stdout, stderr) => { resolve({
      code: error && error.code ? error.code : 0,
      error,
      stdout,
      stderr })
    })
  })}