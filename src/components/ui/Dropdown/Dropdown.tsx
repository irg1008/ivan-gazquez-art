import styles from './Dropdown.module.css'
import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { HiSelector, HiCheck } from 'react-icons/hi'

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

	return (
		<div className={styles.dropdown}>
			<Listbox value={selectedOption} onChange={updateSelection}>
				<Listbox.Button className={styles.options_btn}>
					{selectedOption}
					<span className={styles.btn_icon}>
						<HiSelector />
					</span>
				</Listbox.Button>
				<Listbox.Options className={styles.options}>
					{options.map((option) => (
						<Listbox.Option key={option} value={option}>
							{({ selected }) => (
								<div
									className={`${selected && styles.selected} ${styles.option}`}
								>
									{option}
									{selected && (
										<span className={styles.btn_icon}>
											<HiCheck />
										</span>
									)}
								</div>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	)
}

export default Dropdown
