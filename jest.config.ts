/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
}
jest.mock('module', () => ({
    __esModule: true, // this makes it work
    default: jest.fn(),
}))
