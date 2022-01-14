import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from 'lib/prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: process.env.SECRET,
})
