import { CardProps } from 'core'
import {
	SiJavascript,
	SiTypescript,
	SiPython,
	SiCsharp,
	SiPhp,
	SiJava,
	SiC,
	SiCplusplus,
	SiSwift,
	SiRust,
	SiSolidity,
	SiDart,
	SiGo,
	SiHtml5,
	SiCss3,
	SiPostgresql,
} from 'react-icons/si'

export const languages: CardProps[] = [
	{
		header: <SiJavascript />,
		title: 'JavaScript',
	},
	{
		header: <SiTypescript />,
		title: 'TypeScript',
	},
	{
		header: <SiHtml5 />,
		title: 'HTML5',
	},
	{
		header: <SiCss3 />,
		title: 'CSS3',
	},
	{
		header: <SiPython />,
		title: 'Python',
	},
	{
		header: <SiCsharp />,
		title: 'C#',
	},
	{
		header: <SiCplusplus />,
		title: 'C++',
	},
	{
		header: <SiC />,
		title: 'C',
	},
	{
		header: <SiPhp />,
		title: 'PHP',
	},
	{
		header: <SiJava />,
		title: 'Java',
	},
	{
		header: <SiPostgresql />,
		title: 'PostgreSQL',
	},
	{
		header: <SiSolidity />,
		title: 'Solidity',
	},
]

export const languagesLearning: CardProps[] = [
	{
		header: <SiSwift />,
		title: 'Swift',
	},
	{
		header: <SiRust />,
		title: 'Rust',
	},
	{
		header: <SiDart />,
		title: 'Dart',
	},
	{
		header: <SiGo />,
		title: 'Go',
	},
]
