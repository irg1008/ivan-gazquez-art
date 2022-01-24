import {
	SiFigma,
	SiGoogletagmanager,
	SiNextdotjs,
	SiOpenai,
	SiThreedotjs,
	SiVercel,
	SiWeb3Dotjs,
	SiWebcomponentsdotorg,
} from 'react-icons/si'

type Interest = {
	icon: React.ReactNode
	title: string
}

const interests: Interest[] = [
	{
		icon: <SiGoogletagmanager />,
		title: 'SEO',
	},
	{
		icon: <SiWeb3Dotjs />,
		title: 'Web3',
	},
	{
		icon: <SiWebcomponentsdotorg />,
		title: 'Web Components',
	},
	{
		icon: <SiFigma />,
		title: 'UI/UX',
	},
	{
		icon: <SiOpenai />,
		title: 'AI',
	},
	{
		icon: <SiNextdotjs />,
		title: 'SSR',
	},
	{
		icon: <SiVercel />,
		title: 'Edge Functions',
	},
	{
		icon: <SiThreedotjs />,
		title: '3D',
	},
]

export { interests }
