/* global jest, beforeEach */
// mocking the prisma client 
const { mockDeep, mockReset } = require('jest-mock-extended')

const prisma = require('./prismaClient')
const prismaMock = prisma

jest.mock('./prismaClient', () => mockDeep())

beforeEach(() => {
    mockReset(prismaMock)
})

module.exports = { prismaMock }