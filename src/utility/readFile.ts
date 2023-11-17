import path from 'path'
import * as fs from 'fs'
import { unwrapCodeBlocks } from './helper'
export function readFile(filename: string) {
    try {
        let contents = fs.readFileSync(path.join(__dirname, filename), 'utf-8')
        contents = unwrapCodeBlocks(contents)
        const arr = contents.split(/\r?\n/)
        return arr
    } catch (err) {
        console.log('Invalid input')
        process.exit(-1)
    }
}
