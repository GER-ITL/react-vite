import React, { useState } from 'react'
import Form from '../Form/Form'
const List = () => {
	const [todoS, setTodoS] = useState([])
	const putTodo = value => {
		if (value)
			setTodoS([...todoS, { id: Date.now(), text: value, done: false }])
	}
	return (
		<div>
			List
			<Form putTodo={putTodo} />
			<ul>
				{todoS.map(todo => {
					return <li key={todo.id}>{todo.text}</li>
				})}
			</ul>
		</div>
	)
}

export default List
