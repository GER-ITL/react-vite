import React, { useState } from 'react'
import Form from '../Form/Form'

interface IList {
	key?: object | number
	id: object
	text: string | number
	done: boolean
}

const List = () => {
	const [list, setList] = useState<IList[]>([])
	const putValue = (value: string | number) => {
		if (value) setList([...list, { id: Date.now, text: value, done: false }])
	}
	return (
		<div>
			<h1>List</h1>

			<Form putValue={putValue} />
			<ul>
				{list.map((item: IList) => {
					return <li>{item.text}</li>
				})}
			</ul>
		</div>
	)
}

export default List
