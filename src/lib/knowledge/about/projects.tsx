import { Project } from 'core'
import { SiArduino, SiPython, SiRaspberrypi } from 'react-icons/si'
import { IoIosSchool } from 'react-icons/io'
import { GiDeliveryDrone } from 'react-icons/gi'
import { BsScrewdriver } from 'react-icons/bs'

export const projects: Project[] = [
	{
		name: 'quadcopter',
		title: (
			<>
				Quadcopter <GiDeliveryDrone /> <IoIosSchool />
			</>
		),
		image: (
			<video
				autoPlay
				loop
				muted
				controls={false}
				className="grayscale-[0.5] hover:grayscale-0 transition-all"
				poster="/images/projects/quadcopter/quadcopter.jpg"
			>
				<source
					src="/images/projects/quadcopter/timelapse.mp4"
					type="video/mp4"
				/>
			</video>
		),
		link: 'https://www.instagram.com/stories/highlights/17931960865104707/',
		tools: [
			<SiArduino key="arduino" />,
			<SiRaspberrypi key="raspy" />,
			<SiPython key="python" />,
			<BsScrewdriver key="screwdriver xD" />,
		],
	},
]
