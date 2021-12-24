import {
	SiTypescript,
	SiPython,
	SiJavascript,
	SiPostgresql,
	SiPostcss,
	SiAmazonaws,
	SiSvelte,
	SiBlender,
	SiTailwindcss,
	SiCinema4D,
	SiGit,
	SiCss3,
	SiNextdotjs,
	SiSolidity,
	SiHtml5,
	SiMongodb,
	SiGraphql,
	SiVercel,
	SiJava,
	SiFlask,
	SiJupyter,
	SiDocker,
	SiNpm,
	SiNumpy,
	SiPytorch,
	SiTensorflow,
	SiD3Dotjs,
	SiAdobeaftereffects,
	SiAdobephotoshop,
	SiPostman,
	SiOpenai,
	SiPrettier,
	SiShopify,
	SiWordpress,
	SiReact,
	SiUnity,
	SiUnrealengine,
	SiSass,
	SiServerless,
	SiSketchup,
	SiStorybook,
	SiStyledcomponents,
	SiTestinglibrary,
	SiThreedotjs,
	SiCypress,
	SiVisualstudiocode,
	SiWebgl,
	SiWebcomponentsdotorg,
} from 'react-icons/si'
import styles from './Slider.module.css'

const icons = [
	SiTypescript,
	SiPython,
	SiJavascript,
	SiPostgresql,
	SiPostcss,
	SiAmazonaws,
	SiSvelte,
	SiBlender,
	SiTailwindcss,
	SiCinema4D,
	SiGit,
	SiCss3,
	SiNextdotjs,
	SiSolidity,
	SiHtml5,
	SiMongodb,
	SiGraphql,
	SiVercel,
	SiJava,
	SiFlask,
	SiJupyter,
	SiDocker,
	SiNpm,
	SiNumpy,
	SiPytorch,
	SiTensorflow,
	SiD3Dotjs,
	SiAdobeaftereffects,
	SiAdobephotoshop,
	SiPostman,
	SiOpenai,
	SiPrettier,
	SiShopify,
	SiWordpress,
	SiReact,
	SiUnity,
	SiUnrealengine,
	SiSass,
	SiServerless,
	SiSketchup,
	SiStorybook,
	SiStyledcomponents,
	SiTestinglibrary,
	SiThreedotjs,
	SiCypress,
	SiVisualstudiocode,
	SiWebgl,
	SiWebcomponentsdotorg,
]

/**
 * Create an infinite slider.
 *
 * @return {*}
 */
const Slider: React.FC = () => {
	const content = icons.map((Icon, i) => (
		<span key={i}>
			<Icon className={styles.icon} />
		</span>
	))

	return (
		<div className={styles.wrapper}>
			<div className={styles.marquee}>{content}</div>
			<div className={styles.marquee}>{content}</div>
		</div>
	)
}

export default Slider
