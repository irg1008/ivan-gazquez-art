const Page = () => {
	return (
		<div className="flex w-full h-screen overflow-scroll snap-x snap-mandatory">
			<div className="relative flex-shrink-0 h-full bg-blue-400 snap-center w-[120rem]"></div>
			<div className="relative flex-shrink-0 h-full bg-purple-400 snap-center w-[120rem]"></div>
			<div className="relative flex-shrink-0 h-full bg-red-400 snap-center w-[120rem]"></div>
			<div className="relative flex-shrink-0 h-full bg-green-400 snap-center w-[120rem]"></div>
		</div>
	)
}

export default Page
