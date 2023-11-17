import { readFile } from '../../src/utility/readFile'

describe('readFile() testing', () => {
    test('readFile() with proper param', () => {
        const res = readFile('../../example1.txt')
        expect(res).toEqual([
            'This is the first paragraph.',
            'This is the second paragraph.',
        ])
    })

    // test('readFile() with invalid param ', () => {
    //     const mockConsole = jest
    //         .spyOn(console, 'log')
    //         .mockImplementation(() => {})
    //     const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    //     readFile('')
    //     expect(mockConsole).toHaveBeenCalledWith('Invalid input')
    //     expect(mockExit).toHaveBeenCalledWith(-1)
    //     mockConsole.mockRestore()
    //     mockExit.mockRestore()
    // })
})
