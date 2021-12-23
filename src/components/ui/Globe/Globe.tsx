// @ts-expect-error This library does not have a typescript definition, but it simple enough to not need one.
import createGlobe from "cobe"
import { useEffect, useRef, useState } from "react"
import styles from "./Globe.module.css"

/**
 * Create a globe component inside canvas.
 *
 * @return {*}
 */
const Globe: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const phiRef = useRef(0)
	const [width, setWidth] = useState(1000)

	const handleResize = () =>
		setWidth(Math.min(window.innerWidth, window.innerHeight))

	useEffect(handleResize, [])

	useEffect(() => {
		let phi = phiRef.current

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 1,
			width: width,
			height: width,
			phi: phiRef.current,
			theta: 0.2,
			dark: 0.9,
			diffuse: 2,
			mapSamples: 16000,
			mapBrightness: 20,
			baseColor: [0.4, 0.4, 0.4],
			markerColor: [1, 0.2, 0.2],
			glowColor: [0.5, 0.5, 0.5],
			markers: [{ location: [42.3453, -3.6966], size: 0.05 }],
			onRender: (state: { phi: number } & unknown) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phiRef.current = phi
				phi += 0.002
			},
		})

		window.addEventListener("resize", handleResize)

		return () => globe.destroy()
	}, [width])

	return (
		<div className={styles.graphic}>
			<div className={styles.wrapper}>
				<div className={styles.titlesWrapper}>
					<div className={styles.overlay}></div>
					<div className={styles.titles}>
						<h1>HOVER TO ENLARGE</h1>
						<h1>CLICK TO ENLARGE EVEN MORE</h1>
						<h1>NOW, THAT IS LARGE</h1>
					</div>
				</div>
				<canvas
					ref={canvasRef}
					className={styles.globe}
					width={width}
					height={width}
				/>
			</div>
		</div>
	)
}

export default Globe
