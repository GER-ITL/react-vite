import React, { useState } from 'react'

const Form = ({ putValue }) => {
	const [value, setValue] = useState<string | number>('')
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				putValue(value)
				setValue('')
			}}
		>
			<input
				type='text'
				value={value}
				onChange={e => {
					setValue(e.target.value)
				}}
			/>
		</form>
	)
}

export default Form
