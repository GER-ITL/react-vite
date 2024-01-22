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
