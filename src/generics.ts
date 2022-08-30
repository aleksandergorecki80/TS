type genericArr<T> = T[]

const arrOfNumbers: genericArr<number> = [1,2,3]

const last = <T>(arr: genericArr<T>) => arr[arr.length - 1]

console.log(last(arrOfNumbers))


const lastOfString = last<string>(['first', 'middle', 'last'])
console.log(lastOfString)


const makeArr = <X, Y=number>(x: X, y: Y) => [x, y]

const mixed = makeArr<string | null, number>('string', 5)
console.log(mixed)

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + obj.lastName
    }
}

const person1 = makeFullName({ firstName: 'Jan', lastName: 'Kowalski', age: 33 })
console.log(person1)

interface Tab<T> {
    id: string;
    title: string;
    amount: T
}

const data: Tab<number> = {
    id: '1',
    title: 'Kaszanka',
    amount: 2
}

const dataKielbasa: Tab<string> = {
    id: '1',
    title: 'Kaszanka',
    amount: "2 Kg"
}