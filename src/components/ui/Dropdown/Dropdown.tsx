import styles from './Dropdown.module.css'
import { useEffect, useState } from 'react'
import { HiSelector, HiCheck } from 'react-icons/hi'
import { motion, Variants, Variant, AnimatePresence } from 'framer-motion'
import useOutside from 'hooks/useOutside'
// import {} from "hooks"

interface DropdownVariants extends Variants {
	visible: Variant
	hidden: Variant
}

type DropdownProps = {
	options: string[]
	keyValues?: string[]
	defaultOption: string
	handler: (value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({
	handler,
	options,
	defaultOption,
	keyValues,
}) => {
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen(!open)

	const [selectedOption, setSelectedOption] = useState(defaultOption)

	// when parents changes default (i.e: locale changes) => Change here
	useEffect(() => setSelectedOption(defaultOption), [defaultOption])

	const keys = Object.fromEntries(
		options.map((k, i) => [[k], keyValues?.[i] ?? k])
	)

	const updateSelection = (newOption: string) => {
		const newOptionKey = keys[newOption]
		setSelectedOption(newOption)
		handler(newOptionKey)
	}

	const optionClick = (option: string) => {
		updateSelection(option)
		setOpen(false)
	}

	// Motion.
	const dropdownVariants: DropdownVariants = {
		visible: {
			opacity: 1,
			scale: 1,
		},
		hidden: {
			opacity: 0,
			scale: 0,
		},
	}

	// Click outside.
	const [dropRef] = useOutside<HTMLDivElement>(() => setOpen(false))

	return (
		<div className={styles.dropdown} ref={dropRef}>
			<button type="button" className={styles.options_btn} onClick={toggleOpen}>
				{selectedOption}
				<span className={styles.btn_icon}>
					<HiSelector />
				</span>
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ type: 'spring', stiffness: 250, damping: 20 }}
					>
						<ul className={styles.options}>
							{options.map((option) => (
								<li
									key={option}
									className={`${selectedOption === option && styles.selected} ${
										styles.option
									}`}
									onClick={() => optionClick(option)}
								>
									{option}
									{selectedOption === option && (
										<span className={styles.btn_icon}>
											<HiCheck />
										</span>
									)}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Dropdown
