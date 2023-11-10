import path from 'path'
import fs from 'fs'
import { readFile } from '../utility/readFile'
import { htmlCreator } from './htmlCreator'
export function fileExt(ext: string) {
    if (ext) {
        return ext.substring(ext.lastIndexOf('.'))
    } else {
        return process.exit(-1)
    }
}

export function removeDir(outputValue: string = '') {
    try {
        if (outputValue) {
            // remove the existing dir and til directory
            fs.rmSync(path.join(__dirname, `../../til`), {
                recursive: true,
                force: true,
            })
            fs.rmSync(path.join(__dirname, `../../${outputValue}`), {
                recursive: true,
                force: true,
            })
            fs.mkdirSync(path.join(__dirname, `../../${outputValue}`))
            console.log('Removed and created directories successfully')
        } else {
            fs.rmSync(path.join(__dirname, `../../til`), {
                recursive: true,
                force: true,
            })
            fs.mkdirSync(path.join(__dirname, `../../til`))
            console.log('Removed and created directories successfully')
        }
    } catch (err) {
        console.error('Unable to remove directories')
    }
}

export function writeFile(
    filename: string,
    arg: string,
    styleValue: string = '',
    langValue: string = '',
    outputValue: string = ''
) {
    try {
        if (outputValue) {
            fs.writeFileSync(
                path.join(__dirname, `../../${outputValue}/${filename}.html`),
                htmlCreator(readFile(path.join('../../', arg)), filename)
            )
            console.log('Write File successfully')
        } else {
            fs.writeFileSync(
                path.join(__dirname, `../../til/${filename}.html`),
                htmlCreator(
                    readFile(path.join('../../', arg)),
                    filename,
                    styleValue,
                    langValue
                )
            )
            console.log('Write File successfully')
        }
    } catch (err) {
        console.error('Unable to write file')
    }
}

export function writeMultipleFiles(
    filesArray: string[],
    arg: string,
    styleValue: string = '',
    langValue: string = '',
    outputValue: string = ''
) {
    if (outputValue) {
        for (let i = 0; i < filesArray.length; i++) {
            const filename = path.parse(filesArray[i]).name
            fs.writeFileSync(
                path.join(__dirname, `../../${outputValue}/${filename}.html`),
                htmlCreator(
                    readFile(path.join('../../', arg, filesArray[i])),
                    filename
                )
            )
        }
    } else {
        for (let i = 0; i < filesArray.length; i++) {
            const filename = path.parse(filesArray[i]).name
            fs.writeFileSync(
                path.join(__dirname, `../../til/${filename}.html`),
                htmlCreator(
                    readFile(path.join('../../', arg, filesArray[i])),
                    filename,
                    styleValue,
                    langValue
                )
            )
        }
    }
}

export function unwrapCodeBlocks(content: string): string {
    const regex = /```(.*?)\n(.*?)\n```/gs
    content.replace(regex, function (match, lang, code) {
        if (lang === '') {
            content = `<pre><code>
      ${code}
   </code></pre>`
        } else {
            content =
                `<pre><code class="language-${lang}">` +
                `
      ${code}
      </code></pre>`
        }

        return content
    })
    return content
}
