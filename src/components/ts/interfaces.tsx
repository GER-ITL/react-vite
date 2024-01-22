interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rectOne: Rect = {
	id: '123',
	size: {
		width: 10,
		height: 5,
	},
}

//=========

interface RectWithArea extends Rect {
	getArea: () => number
}

interface IClock {
	time: Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()
	setTime(date: Date): void {
		this.time = date
	}
}
interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	margin: '0 auto',
	borderRadius: '5px',
}
