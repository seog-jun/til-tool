import { readDirectory } from '../../src/utility/readDirectory'

describe('readDirectory() testing', () => {
    test('readDirectory() with proper param', () => {
        const res = readDirectory('../../examples')
        expect(res).toEqual(['codeBlocks.txt', 'text1.txt', 'text2.txt'])
    })

    test('readDirectory() with invalid param', async () => {
        const mockConsole = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {})
        const mockExit = jest.spyOn(process, 'exit').mockImplementation()

        readDirectory('a')

        expect(mockConsole).toHaveBeenCalledWith('Invalid input')
        expect(mockExit).toHaveBeenCalledWith(-1)
        mockConsole.mockRestore()
        mockExit.mockRestore()
    })
})
