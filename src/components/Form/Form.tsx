import React, { useState } from 'react'

const Form = ({ putTodo }) => {
	const [value, setValue] = useState('')

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				putTodo(value)
				setValue('')
			}}
		>
			<input
				placeholder='Enter value..'
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	)
}

export default Form
