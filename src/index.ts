//Basic types
var id: number = 5;
let company: string = 'Litmus7'
let isPublished: boolean = true
let x: any = 'Hello'

//List
let ids: number[] = [1, 2, 3, 4]
let arr: any[] = [13, 'Muhammed Shaheer', true]

//Tuple
let person: [number, string, boolean] = [1, 'Muhammed Shaheer', true]

//Tuple List
let employee: [number, string][]
employee = [
    [1, 'Muhammed'],
    [2, 'Shaheer'],
    [3, 'CK']
]

//Union
let productId: string | number = 22
productId = '22'

//Enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
let customerId = <number>cid
let customerIdd = cid as number

//Functions
function addNum(x: number, y: number): number {
    return x + y
}

//Void
function log(message: number | string): void {
    console.log(message);
}

//Interfaces
interface UserInterface {
    id: number,
    name: string,
    readonly age?: number
}
const user1: UserInterface = {
    id: 1,
    name: 'John Jacob'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Classes - provate, protected, public(default)
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const brad = new Person(1, 'Muhammed');
const mike = new Person(1, 'Mike');

mike.id = 2