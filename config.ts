import shell from 'shelljs';
import cmd from 'command-line-args';

const args = cmd([
  {
    name: 'stage',
    alias: 's',
    multiple: false,
  },
  {
    name: 'scripts',
    multiple: false,
  },
]);
if (!args.stage) {
  shell.exit(0);
}
const stage: 'dev' | 'staging' = args.stage;
const scripts: 'start' | 'build' = args.scripts;
async function getEnv() {
  return {
    env: `REACT_APP_ENV_NAME=${stage}`,
    scripts,
  };
}
getEnv().then(res => {
  shell.exec(`${res.env} react-scripts ${res.scripts}`);
});
