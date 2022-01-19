import { CardProps } from 'core'
import {
	SiVisualstudiocode,
	SiDocker,
	SiAmazonaws,
	SiGit,
	SiVercel,
	SiNpm,
	SiPostman,
	SiPrettier,
	SiShopify,
	SiWordpress,
	SiServerless,
	SiEslint,
	SiTestinglibrary,
	SiJest,
	SiCypress,
	SiSupabase,
	SiLighthouse,
	SiInsomnia,
	SiMocha,
} from 'react-icons/si'

export const tools: CardProps[] = [
	{
		header: <SiVisualstudiocode />,
		title: 'VSCode',
	},
	{
		header: <SiDocker />,
		title: 'Docker',
	},
	{
		header: <SiAmazonaws />,
		title: 'AWS',
	},
	{
		header: <SiServerless />,
		title: 'Serverless',
	},
	{
		header: <SiEslint />,
		title: 'ESlint',
	},
	{
		header: <SiJest />,
		title: 'Jest',
	},
	{
		header: <SiCypress />,
		title: 'Cypress',
	},
	{
		header: <SiTestinglibrary />,
		title: 'Testing Library',
	},
	{
		header: <SiGit />,
		title: 'Git',
	},
	{
		header: <SiVercel />,
		title: 'Vercel',
	},
	{
		header: <SiNpm />,
		title: 'NPM',
	},
	{
		header: <SiPostman />,
		title: 'Postman',
	},
	{
		header: <SiPrettier />,
		title: 'Prettier',
	},
	{
		header: <SiSupabase />,
		title: 'Supabase',
	},
	{
		header: <SiLighthouse />,
		title: 'Lighthouse',
	},
	{
		header: <SiInsomnia />,
		title: 'Insomnia',
	},
]

export const toolsLearning: CardProps[] = [
	{
		header: <SiShopify />,
		title: 'Shopify',
	},
	{
		header: <SiWordpress />,
		title: 'Wordpress',
	},
	{
		header: <SiMocha />,
		title: 'Mocha',
	},
]
