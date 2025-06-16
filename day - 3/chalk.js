import chalk from 'chalk';

const log = console.log;

log(chalk.blue('Hello world!'));
log(chalk.red('This is a red message!'));

// Combine styles
log(chalk.blue.bgYellow.bold('Hello world with combined styles!'));

// Use multiple colors in a single line
log(chalk.green('This is green text') + ' and ' + chalk.red('this is red text'));

// Test underlined text
log(chalk.underline('This is underlined text'));

// Test background colors
log(chalk.bold('This text has a magenta background'));

log(chalk.green("this is green text") + chalk.red(" and this is red text"));

log(chalk.blue.bgYellow.bold("Hello world with combined styles!"));
log(chalk.underline("This is underlined text"));                