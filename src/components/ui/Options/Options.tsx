import styles from './Options.module.css'
import { useToggle } from 'react-use'
import { motion, Variants, Variant, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiCheck, HiSelector } from 'react-icons/hi'
import useOutsideClick from 'hooks/useOutsideClick'

interface DropdownVariants extends Variants {
	visible: Variant
	hidden: Variant
}

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

type PlaceHolder = string | JSX.Element
type Option = string

type OptionsProps = {
	options: Option[]
	selected: Option
	placeholders?: PlaceHolder[]
	onOptionChange: (option: Option) => void
	useSelected?: boolean
}

const Options = ({
	options,
	selected,
	onOptionChange,
	placeholders,
	useSelected = true,
}: OptionsProps) => {
	const [open, toggleOpen] = useToggle(false)
	const [selectedIndex, setSelectedIndex] = useState(options.indexOf(selected))

	// Click outside.
	const { ref: dropRef } = useOutsideClick<HTMLDivElement>(() =>
		toggleOpen(false)
	)

	// Change selected.
	const changeSelected = (newOption: Option) => {
		setSelectedIndex(options.indexOf(newOption))
		onOptionChange(newOption)
		toggleOpen(false)
	}

	// When selected props changes.
	useEffect(
		() => setSelectedIndex(options.indexOf(selected)),
		[selected, options]
	)

	return (
		<div className={styles.dropdown} ref={dropRef}>
			<button type="button" className={styles.options_btn} onClick={toggleOpen}>
				{placeholders?.[selectedIndex] ?? selected}
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
						className={styles.options_wrapper}
					>
						<ul className={styles.options}>
							{options.map((option, i) => {
								const isSelected = !!useSelected && i === selectedIndex
								const value = !!placeholders ? placeholders[i] : option
								return (
									<li
										key={i}
										className={`${isSelected && styles.selected} ${
											styles.option
										}`}
										onClick={() => changeSelected(option)}
									>
										{value}
										{isSelected && (
											<span className={styles.btn_icon}>
												<HiCheck />
											</span>
										)}
									</li>
								)
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Options
