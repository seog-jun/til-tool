import { removeDir, writeFile } from '../../src/utility/helper'

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

    test('removeDir() with output param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir('build')
        expect(mockConsole).toHaveBeenCalledWith(
            'Removed and created directories successfully'
        )
        mockConsole.mockRestore()
    })

    test('removeDir() with output param', () => {
        const mockError = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {})
        removeDir('/')
        expect(mockError).toHaveBeenCalledWith('Unable to remove directories')
        mockError.mockRestore()
    })

    test('writeFile() with default param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir()
        writeFile('example1', 'example1.txt')
        expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
        mockConsole.mockRestore()
    })

    test('writeFile() with default param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir()
        writeFile('example1', 'example1.txt')
        expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
        mockConsole.mockRestore()
    })

    test('writeFile() with style param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir()
        writeFile(
            'example1',
            'example1.txt',
            'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
        )
        expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
        mockConsole.mockRestore()
    })

    test('writeFile() with lang param', () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        removeDir()
        writeFile('example1', 'example1.txt', 'br')
        expect(mockConsole).toHaveBeenCalledWith('Write File successfully')
        mockConsole.mockRestore()
    })

    test('writeFile() with error', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation()
        writeFile('example1', 'error.txt')
        expect(mockExit).toHaveBeenCalledWith(-1)
        mockExit.mockRestore()
    })
})
