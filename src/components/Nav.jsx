import React, { useState } from 'react'

const Nav = () => {
	const [show, setShow] = useState(false)
	return (
		<div>
			{show && (
				<ul>
					<li>
						<a href=''>Nav 1</a>
					</li>
					<li>
						<a href=''>Nav 1</a>
					</li>
					<li>
						<a href=''>Nav 1</a>
					</li>
				</ul>
			)}
			<button
				onClick={() => {
					setShow(true)
				}}
				onDoubleClick={() => {
					setShow(false)
				}}
			></button>
		</div>
	)
}

export default Nav
