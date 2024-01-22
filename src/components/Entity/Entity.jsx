import React from 'react'
import data from '../../state'
const Entity = () => {
	return (
		<div>
			{data.map(el => {
				return <li key={el.id}>{el.value}</li>
			})}
		</div>
	)
}

export default Entity
