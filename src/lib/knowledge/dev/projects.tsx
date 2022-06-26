import { Project } from 'core'
import Image from 'next/image'
import {
	SiAmazonaws,
	SiCsharp,
	SiCss3,
	SiDocker,
	SiDotnet,
	SiExpress,
	SiFastapi,
	SiFlask,
	SiGithub,
	SiGooglecloud,
	SiHeroku,
	SiHtml5,
	SiJavascript,
	SiJquery,
	SiNextdotjs,
	SiNpm,
	SiOnnx,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiPytorch,
	SiRailway,
	SiSelenium,
	SiShopify,
	SiSolidity,
	SiSqlite,
	SiStrapi,
	SiStyledcomponents,
	SiSupabase,
	SiSvelte,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudio,
} from 'react-icons/si'
import { IoMdConstruct, IoIosSchool } from 'react-icons/io'
import { FaRobot } from 'react-icons/fa'

export const projects: Project[] = [
	{
		name: 'Escala2',
		title: 'Escala2 - Patronaje Industrial',
		image: (
			<Image
				src="/images/projects/escala2/escala2.gif"
				placeholder="blur"
				blurDataURL="/images/projects/escala2/thumb.jpg"
				alt="Escala2 - Patronaje Industrial"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://escala2.es',
		tools: [
			<SiJavascript key="js" />,
			<SiHtml5 key="html" />,
			<SiCss3 key="css" />,
			<SiJquery key="jquery" title="JQuery" />,
		],
	},

	{
		name: 'Renacerae',
		title: 'Renacerae - Moda de Mujer',
		image: (
			<Image
				src="/images/projects/renacerae/renacerae.avif"
				alt="Renacerae"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://galeria.renacerae.com',
		tools: [
			<SiStyledcomponents key="sc" title="Styled Components" />,
			<SiNextdotjs key="next" title="Next.JS" />,
			<SiTypescript key="ts" />,
			<SiHtml5 key="html" />,
			<SiStrapi key="strapi" title="Strapi" />,
		],
	},

	{
		name: 'Questions App',
		title: (
			<>
				Questions App <SiGithub /> <IoIosSchool />
			</>
		),
		image: (
			<Image
				src="/images/projects/disman/disman.gif"
				alt="Question App"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://github.com/irg1008/practica-dms-2021-2022',
		tools: [
			<SiPython key="python" />,
			<SiFlask key="flask" title="Flask" />,
			<SiSqlite key="sqlite" title="SQLite" />,
			<SiDocker key="docker" />,
			<SiTailwindcss key="tailwind" title="Tailwind CSS" />,
		],
	},

	{
		name: 'LNC',
		title: (
			<>
				La Nueva Costura <IoMdConstruct />
			</>
		),
		image: (
			<Image
				src="/images/projects/lanuevacostura/lanuevacostura.avif"
				alt="La Nueva Costura"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
		),
		link: 'https://lanuevacostura.com',
		tools: [
			<SiSvelte key="svelte" />,
			<SiTailwindcss key="tailwindcss" title="Tailwind CSS" />,
			<SiPrisma key="prisma" title="Prisma" />,
			<SiPostgresql key="postgresql" />,
			<SiRailway key="rails" title="Rails" />,
		],
	},

	{
		name: 'CalBot',
		title: (
			<>
				CalBot - Discord Calendar Bot <SiGithub /> <FaRobot />
			</>
		),
		image: (
			<Image
				src="/images/projects/dsbot/dsbot.jpg"
				alt="CalBot"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
		),
		link: 'https://github.com/irg1008/CalBot',
		tools: [
			<SiHeroku key="heroku" title="Heroku" />,
			<SiExpress key="express" title="Express" />,
			<SiSupabase key="supabase" title="Supabase" />,
			<SiGooglecloud key="googlecloud" title="Google Cloud" />,
		],
	},

	{
		name: 'Gazquez.art',
		title: (
			<>
				Gazquez.art - Art Store <IoMdConstruct />
			</>
		),
		image: (
			<Image
				src="/images/projects/gazquez/picture.avif"
				alt="Gazquez"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
		),
		link: 'https://gazquez.art',
		tools: [
			<SiSvelte key="svelte" title="Svelte" />,
			<SiSolidity key="solidity" title="Solidity" />,
		],
	},

	{
		name: 'Svelte-Fullscroll',
		title: (
			<>
				Svelte Fullscroll <SiNpm title="NPM" /> <IoMdConstruct />
			</>
		),
		image: (
			<Image
				src="/images/projects/fullpage/fullpage.gif"
				alt="Svelte FullScroll"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
		),
		link: 'https://www.npmjs.com/package/svelte-fullscroll',
		tools: [
			<SiSvelte key="svelte" title="Svelte" />,
			<SiTypescript key="typescript" title="Typescript" />,
		],
	},

	{
		name: 'UBUSecret',
		title: (
			<>
				UBUSecret - Secret Keeper <SiGithub /> <IoIosSchool />
			</>
		),
		image: (
			<Image
				src="/images/projects/ubusecret/cover.avif"
				alt="Svelte FullScroll"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://github.com/irg1008/UBUSECRET',
		tools: [
			<SiDotnet key="net" title="NET" />,
			<SiCsharp key="c#" title="C#" />,
			<SiSelenium key="selenium" title="Selenium" />,
			<SiVisualstudio key="visualstudio" title="Visual Studio" />,
		],
	},

	{
		name: 'Sign2Text',
		title: (
			<>
				Sign2Text <SiGithub /> <IoIosSchool />
			</>
		),
		image: (
			<Image
				src="/images/projects/sign2text/sign2text.jpg"
				alt="Sign2Text"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://sign2text.com',
		tools: [
			<SiSvelte key="svelte" title="Svelte" />,
			<SiTypescript key="typescript" title="Typescript" />,
			<SiPython key="python" title="Python" />,
			<SiFastapi key="fastapi" title="FastAPI" />,
			<SiAmazonaws key="amazonaws" title="Amazon AWS" />,
			<SiDocker key="docker" title="Docker" />,
			<SiOnnx key="onnx" title="ONNX" />,
			<SiPytorch key="pytorch" title="PyTorch" />,
		],
	},

	{
		name: 'Lloret Art',
		title: 'Lloret Art - Gallery',
		image: (
			<Image
				src="/images/projects/lloretart/lloretart.jpg"
				alt="Lloret Art"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
		),
		link: 'https://lloretart.com',
		tools: [<SiShopify key="shopify" title="Shopify" />],
	},
]
