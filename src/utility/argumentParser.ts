import { Command } from 'commander'
import myInfo from '../../package.json'

const program = new Command()

// Command line inter face to use options
program
    .name('ts-node src/index.ts')
    .usage('<fileName/dirName> -o output <dirname> -s <stylesheetURL>')

program.version(
    myInfo.name + ' ' + myInfo.version,
    '-v, --version',
    'outputs the current version'
)
program.argument('<fileName/dirName>', 'converts file to html')
program.option('-l, --lang <language>', 'indicates the language to use')
program.option('-o, --output <dirName>', 'creates a specified directory')
program.option('-s, --stylesheet <stylesheetURL>', 'sets a stylesheet to HTML')
export const options = program.opts()
program.parse(process.argv)
export const arg = program.args[0]
export const langValue = program.opts().lang
export const outputValue = program.opts().output
export const styleValue = program.opts().stylesheet
