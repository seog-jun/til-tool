import { readDirectory } from './utility/readDirectory'
import {
    fileExt,
    removeDir,
    writeFile,
    writeMultipleFiles,
} from './utility/helper'
import {
    options,
    arg,
    langValue,
    outputValue,
    styleValue,
} from './utility/argumentParser'
import path from 'path'
import fs from 'fs'

if (fs.existsSync(arg)) {
    {
        removeDir()
        // a single .txt file is used as an input
        if (fileExt(arg) === '.txt') {
            const filename = path.parse(arg).name

            // if option -s is selected
            if (options.stylesheet) {
                writeFile(filename, arg, styleValue, '')
                // if option -l is selected
            } else if (options.lang) {
                writeFile(filename, arg, '', langValue)
            }
            // option is not selected
            else {
                writeFile(filename, arg, '', '')
            }
        }
        // a directory is used as an input
        else if (!arg.includes('.')) {
            const filesArray = readDirectory(path.join('../../', arg))

            // if option -s is selected
            if (options.stylesheet) {
                writeMultipleFiles(filesArray, arg, styleValue, '')
                // if option -l is selected
            } else if (options.lang) {
                writeMultipleFiles(filesArray, arg, '', langValue)
            }
            // option is not selected
            else {
                writeMultipleFiles(filesArray, arg, '', '')
            }
        } else {
            console.log('Invalid fileName/dirName')
            process.exit(-1)
        }
    }
    // options is output, overwrite the file/dir above
    if (options.output) {
        removeDir(outputValue)

        // a single .txt file is used as an input
        if (fileExt(arg) === '.txt') {
            const filename = path.parse(arg).name
            writeFile(filename, arg, '', '', outputValue)
        }
        // a directory is used as an input
        else {
            const filesArray = readDirectory(path.join('../../', arg))
            writeMultipleFiles(filesArray, arg, '', '', outputValue)
        }
    }
    process.exit(0)
} else {
    console.log('Please type valid fileName/dirName')
    process.exit(-1)
}
