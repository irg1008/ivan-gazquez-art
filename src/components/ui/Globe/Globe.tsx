import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import styles from './Globe.module.css'
import { useMeasure } from 'react-use'

/**
 * Create a globe component inside canvas.
 *
 * @return {*}
 */
const Globe = () => {
	const [ref, { width }] = useMeasure<HTMLDivElement>()

	const phiRef = useRef(0)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		let phi = phiRef.current
		if (!canvasRef.current) return

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 1,
			width: width,
			height: width,
			phi: phiRef.current,
			theta: 0.2,
			dark: 0.9,
			diffuse: 2,
			mapSamples: 16_000,
			mapBrightness: 20,
			baseColor: [0.4, 0.4, 0.4],
			markerColor: [1, 0.2, 0.2],
			glowColor: [0.5, 0.5, 0.5],
			markers: [
				{ location: [42.3453, -3.6966], size: 0.05 },
				{ location: [51.03453, 0.05966], size: 0.05 },
			],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phiRef.current = phi
				phi += 0.001
			},
		})

		return () => globe.destroy()
	}, [width])

	return (
		<div className={styles.graphic} ref={ref}>
			<canvas
				ref={canvasRef}
				className={styles.globe}
				width={width}
				height={width}
			/>
		</div>
	)
}

export default Globe
