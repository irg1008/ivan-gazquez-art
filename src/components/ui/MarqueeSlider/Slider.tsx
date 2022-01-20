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
	SiJsonwebtokens,
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
	SiPytorch,
	SiTensorflow,
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
	SiFirebase,
	SiSketchup,
	SiStorybook,
	SiStyledcomponents,
	SiTestinglibrary,
	SiThreedotjs,
	SiCypress,
	SiVisualstudiocode,
	SiWebgl,
	SiWebcomponentsdotorg,
	SiFigma,
	SiLighthouse,
	SiInsomnia,
} from 'react-icons/si'
import styles from './Slider.module.css'

const icons = [
	SiAdobeaftereffects,
	SiOpenai,
	SiAdobephotoshop,
	SiBlender,
	SiCinema4D,
	SiUnity,
	SiUnrealengine,
	SiFigma,

	SiInsomnia,
	SiJsonwebtokens,
	SiLighthouse,
	SiTypescript,
	SiFirebase,
	SiPython,
	SiJavascript,
	SiPostgresql,
	SiPostcss,
	SiAmazonaws,
	SiSvelte,
	SiTailwindcss,
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
	SiPytorch,
	SiTensorflow,
	SiPostman,
	SiPrettier,
	SiShopify,
	SiWordpress,
	SiReact,
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

type SliderProps = {
	children: React.ReactNode
}

/**
 * Create an infinite slider.
 *
 * @param {*} { children }
 * @return {*}  {JSX.Element}
 */
const Slider = ({ children }: SliderProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.marquee}>{children}</div>
			<div className={styles.marquee}>{children}</div>
		</div>
	)
}

/**
 * Inifinite slider with icons.
 *
 * @return {*}  {JSX.Element}
 */
const IconSlider = (): JSX.Element => {
	const content = icons.map((Icon, i) => (
		<span key={i}>
			<Icon className={styles.icon} />
		</span>
	))
	return <Slider>{content}</Slider>
}

export default IconSlider
