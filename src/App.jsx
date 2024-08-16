import { useState } from 'react'
import logo from '/click.png'
const tg = window.Telegram.WebApp

function App() {
	const [count, setCount] = useState(0)
	const [animations, setAnimations] = useState([])

	const click = e => {
		setCount(count + 1)
		navigator.vibrate(50)

		const buttonRect = e.target.getBoundingClientRect()
		const x = e.clientX - buttonRect.left
		const y = e.clientY - buttonRect.top
		const id = Date.now() // уникальный идентификатор для каждой анимации

		setAnimations(prevAnimations => [...prevAnimations, { id, x, y }])

		setTimeout(() => {
			setAnimations(prevAnimations =>
				prevAnimations.filter(animation => animation.id !== id)
			)
		}, 1000) // Удаление анимации через 1 секунду
	}

	return (
		<div className='flex flex-col justify-center items-center bg-[#0e1b19] h-screen text-white'>
			<div>
				<h1 className='text-white font-medium mb-24 bg-[#254742]/50 px-2 py-2 rounded-xl'>
					Hello,{' '}
					<span className='text-[#5EC8B5]'>
						{tg.initDataUnsafe.user.username}
					</span>
				</h1>
			</div>
			<div className='flex flex-col items-center'>
				<h1 className='text-xl text-[#ffffff9f]'>Your balance</h1>
				<h1 className='text-3xl font-semibold ml-2'>$ {count}</h1>
			</div>
			<div className='relative'>
				<button onClick={click} className='relative'>
					<img src={logo} />
					{animations.map(animation => (
						<div
							key={animation.id}
							className='absolute text-3xl font-bold text-white animate-fade-out-up pointer-events-none'
							style={{
								left: `${animation.x}px`,
								top: `${animation.y}px`,
							}}
						>
							+1
						</div>
					))}
				</button>
			</div>
			<div className='mt-24'>
				<a href='#' className='bg-black/25 px-10 py-5 rounded-lg text-xl'>
					Withdrawal
				</a>
			</div>
		</div>
	)
}

export default App
