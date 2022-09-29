// use prisma client as singleton so we will be able to mock it with jest.
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
module.exports = prisma