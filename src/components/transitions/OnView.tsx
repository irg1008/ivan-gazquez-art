import { ParallaxVariants } from './Parallax'
import ParallaxOnView, { ParallaxOnViewProps } from './ParallaxOnView'

type OnViewProps = Pick<
	ParallaxOnViewProps,
	'children' | 'transition' | 'triggerOnce'
>

// Fade in and scale.

const fadeInFromBottom: ParallaxVariants = {
	inside: {
		opacity: 1,
		scale: 1,
		y: 0,
	},
	outside: {
		opacity: 0,
		scale: 0.65,
		y: 50,
	},
}

const FadeInFromBottom = ({ children, ...props }: OnViewProps) => (
	<ParallaxOnView variants={fadeInFromBottom} {...props}>
		{children}
	</ParallaxOnView>
)

// Go Down and rotate.

const goDownAndRotateRight: ParallaxVariants = {
	inside: {
		opacity: 1,
		rotateZ: 0,
		y: 0,
	},
	outside: {
		opacity: 0,
		rotateZ: 20,
		y: 50,
	},
}

const GoDownAndRotate = ({ children, ...props }: OnViewProps) => (
	<ParallaxOnView variants={goDownAndRotateRight} {...props}>
		{children}
	</ParallaxOnView>
)

export { FadeInFromBottom, GoDownAndRotate }
