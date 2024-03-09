const isFetching: boolean = true
const isLoading: boolean = false

const numberArray: number[] = [1, 2, 3]
const stringArray: Array<string> = ['one', 'two']

//any

let variable: any = 434

variable = '434'

function sayHi(name: string): void {
	console.log('name', name)
}

//never
function throwError(mess: string): never {
	throw new Error(mess)
}

//type

type Login = string

const login: Login = 'admin'

type id = string | number

type SomeType = string | null | undefined

const age: number = 20
const fullName: string = 'Daniil'

const summ = (a: number, b: number): number => {
	return a + b
}
interface Person {
	name: string
	age: number
	hasJob: boolean
	getInfo?: () => string
}

type Car = {
	label: string
	year: number | string
	color: string
}

const cars: Car = {
	label: 'Nissan',
	year: 1992,
	color: 'red',
}

const person: Person = {
	name: 'Alex',
	age: 20,
	hasJob: true,
}

const nums: Array<number> = [1, 2, 3, 4]

const entity: Array<string | number | boolean> = ['2', 2, true]

const users: Array<Person> = [
	{
		name: 'Mari',
		age: 21,
		hasJob: true,
		getInfo: () => {
			return 'asdasda'
		},
	},
]
