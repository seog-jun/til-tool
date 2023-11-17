import { removeDir, unwrapCodeBlocks } from '../../src/utility/helper'

describe('removeDir() testing', () => {
    test('removeDir() without param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir()
        expect(mockConsole).toHaveBeenCalledWith(
            'Removed and created directories successfully'
        )
        mockConsole.mockRestore()
    })

    // test('removeDir() with output param', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     removeDir('build')
    //     expect(mockConsole).toHaveBeenCalledWith(
    //         'Removed and created directories successfully'
    //     )
    //     mockConsole.mockRestore()
    // })

    // test('removeDir() with output param', () => {
    //     const mockError = jest
    //         .spyOn(console, 'error')
    //         .mockImplementation(() => {})
    //     removeDir('/')
    //     expect(mockError).toHaveBeenCalledWith('Unable to remove directories')
    //     mockError.mockRestore()
    // })

    // test('writeFile() with default param', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     removeDir()
    //     writeFile('example1', 'example1.txt')
    //     expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
    //     mockConsole.mockRestore()
    // })

    // test('writeFile() with default param', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     removeDir()
    //     writeFile('example1', 'example1.txt')
    //     expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
    //     mockConsole.mockRestore()
    // })

    // test('writeFile() with style param', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     removeDir()
    //     writeFile(
    //         'example1',
    //         'example1.txt',
    //         'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
    //     )
    //     expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
    //     mockConsole.mockRestore()
    // })

    // test('writeFile() with lang param', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     removeDir()
    //     writeFile('example1', 'example1.txt', 'br')
    //     expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
    //     mockConsole.mockRestore()
    // })

    test('unwrapCodeBlocks() returns string with correct HTML tags', () => {
        const testSentence = 'This is a fenced code block'
        const testSentenceWithTicks = `\`\`\`\n${testSentence}\n\`\`\``
        expect(unwrapCodeBlocks(testSentenceWithTicks)).toBe(
            `<pre><code>\n      ${testSentence}\n   </code></pre>`
        )
    })

    test('unwrapCodeBlocks() returns string with code language if present', () => {
        const testSentence = 'This is a fenced code block'
        const testSentenceWithTicks = `\`\`\`JavaScript\n${testSentence}\n\`\`\``
        expect(unwrapCodeBlocks(testSentenceWithTicks)).toBe(
            `<pre><code class="language-JavaScript">\n      ${testSentence}\n      </code></pre>`
        )
    })

    test('does not replace content if not enclosed with ```', () => {
        const content = '```This is not a fenced code block'
        expect(unwrapCodeBlocks(content)).toBe(content)
    })
})
