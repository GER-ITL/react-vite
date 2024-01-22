import { useState } from 'react'
import '../src/styles/App.scss'
import reactLogo from './assets/react.svg'
import Entity from './components/Entity/Entity'
import List from './components/List/List'
import viteLogo from '/vite.svg'

function App() {
	const [count, setCount] = useState(0)
	const [value, setValue] = useState('')
	const [now, setNow] = useState(new Date())

	setInterval(() => {
		setNow(new Date())
	}, 1000)
	return (
		<>
			{now.toLocaleTimeString()}
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<div className='card'>
				<button onClick={() => setValue('Концентрация')}>Концентрация</button>
				<button onClick={() => setValue(<List />)}>Доступность</button>
				<button onClick={() => setValue(<Entity />)}>Список</button>
			</div>
			<div>{value}</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
				<List />
			</p>
		</>
	)
}

export default App
