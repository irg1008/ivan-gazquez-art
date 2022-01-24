export type Status = 'studying' | 'working'

export type TimelineEvent = {
	id: string
	status: Status
	starting: Date
	ending: Date | 'present'
}

const events: TimelineEvent[] = [
	{
		id: 'london_ss',
		status: 'working',
		starting: new Date(2018, 5, 20),
		ending: new Date(2018, 8, 5),
	},
	{
		id: 'burgos_uni',
		status: 'studying',
		starting: new Date(2018, 8, 10),
		ending: new Date(2022, 5, 21),
	},
	{
		id: 'lerma_dev',
		status: 'working',
		starting: new Date(2020, 4),
		ending: 'present',
	},
	{
		id: 'lerma_3d',
		status: 'working',
		starting: new Date(2019, 11),
		ending: 'present',
	},
	{
		id: 'english_cert',
		status: 'studying',
		starting: new Date(2022, 1),
		ending: 'present',
	},
]

export { events }
