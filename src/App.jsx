import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import useFetch from './hooks/useFetch'

function App() {
	const { data, error, loading } = useFetch('https://api.quotable.io/random')

	return (
		<>
			{loading ? (
				<div className='flex'>
					<AiOutlineLoading3Quarters className='h-6 w-6 animate-spin' />
					<h2 className='ml-2'>Loading data...</h2>
				</div>
			) : (
				<div className='flex flex-col items-center'>
					{data && !error ? (
						<>
							<h1 className='py-4 text-xl'>Quote</h1>

							<div className='bg-[#1e293b] w-[500px] min-h-[100px] p-6 rounded-lg shadow-md'>
								<q>
									<em>{data.content}</em>
								</q>
								<p className='text-center mt-8 text-gray-400'>
									- {data.author} -
								</p>
								<div className='mt-4'>
									{data.tags?.map((tag, i) => (
										<span
											key={i}
											className='text-sm py-2 px-4 rounded-full bg-[#12273f] text-[#2f9fd4] mr-4'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</>
					) : (
						<div>There something wrong. Please try again later</div>
					)}
				</div>
			)}
		</>
	)
}

export default App
