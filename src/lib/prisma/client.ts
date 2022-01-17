import { PrismaClient } from '@prisma/client'

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined
}

// Create only one prisma client instance for development
const prisma = global.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
