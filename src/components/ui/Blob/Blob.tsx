import { motion } from 'framer-motion'
// import styles from './Blob.module.css'
import { Parallax } from 'components/transitions/Parallax'

type BlobProps = {
	className?: string
	type?: 1 | 2
}

const paths = [
	'M309.723 4.315c73.231-19.042 140.515 41.67 199.207 89.426 67.93 55.273 146.935 112.054 155.524 199.208 9.085 92.192-44.896 178.862-111.969 242.762-65.421 62.326-152.876 104.407-242.762 95.185-83.546-8.572-141.182-78.135-197.583-140.364C59.659 432.629-15.973 368.651 3.422 292.949c19.139-74.704 133.188-64.103 189.312-116.99 52.386-49.364 47.325-153.53 116.989-171.644Z',
	'M349.555 1.16c88.637-11.252 162.407 61.504 225.826 124.441 63.741 63.256 145.216 137.868 127.123 225.826-17.638 85.746-141.315 87.847-204.177 148.772-60.695 58.825-65.47 178.975-148.772 193.299-84.782 14.579-149.124-71.293-210.563-131.508C76.626 500.866-7.498 438.383.535 351.427c7.867-85.157 113.707-114.37 174.071-174.949 60.579-60.796 89.807-164.51 174.949-175.318Z',
]

const Blob = ({ className, type = 1 }: BlobProps) => {
	return (
		<div className={className}>
			<Parallax>
				<svg width={706} height={696} xmlns="http://www.w3.org/2000/svg">
					<motion.path
						fillRule="evenodd"
						clipRule="evenodd"
						d={paths[type - 1]}
						fill="currentColor"
					/>
				</svg>
			</Parallax>
		</div>
	)
}

export default Blob
