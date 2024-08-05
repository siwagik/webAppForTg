import { useState } from 'react'
import logo from '/click.png'
const tg = window.Telegram.WebApp
function App() {
	const [count, setCount] = useState(0)
	const [animate, setAnimate] = useState(false)

	const click = e => {
		setCount(count + 1)
	}

	return (
		<div className='flex flex-col justify-center items-center bg-[#0e1b19] h-screen text-white'>
			<div>
				<h1 className='text-red-500'>
					Hello, ${tg.initDataUnsafe.user.username}
				</h1>
			</div>
			<div className='flex items-center'>
				<img src={logo} className='w-12 h-12' />
				<h1 className='text-3xl font-bold ml-2'>{count}</h1>
			</div>
			<div>
				<button onClick={click}>
					<img src={logo} />
				</button>
			</div>
			<div className='bg-black/25 px-10 py-5 rounded-lg'>
				<a href='#' className='text-xl'>
					Withdrawal
				</a>
			</div>
		</div>
	)
}

export default App
