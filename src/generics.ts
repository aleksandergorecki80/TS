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


// NO BS TS

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v
        } 
    ]
 }

 const [stGett, stSett] = simpleState(10)

 console.log('NO BS')
 console.log(stGett())
 stSett(62)
 console.log(stGett())

//  interface Rank <RankItem> {
//     item: RankItem;
//     rank: number;
//  }

//  function ranker <RankItem>(
//     items: RankItem[],
//     rank: (v: RankItem) => number
//  ): RankItem[] {
//     const ranks: Rank<RankItem>[] = items.map((item) => )
//  }

function removeItemFromArray<T>(arr: Array<T>, item: T){
    return arr.filter(element => element !== item)
}

const arr3 = removeItemFromArray<number>([1,2,3], 2)
console.log(arr3)

const arrStr = removeItemFromArray<string>(['one', 'twp', 'three'], 'twp')
console.log(arrStr)


class Collection<T> {
    items: Array<T> = [];

    add(item: T) {
        this.items.push(item)
    }

    remove(item: T){
        const result = this.items.filter(element => element !== item)
        this.items = result
    }
}

const colletion = new Collection<number>()
colletion.add(1)
colletion.add(1)
colletion.add(3)
colletion.remove(3)
console.log(colletion)

const colletionSrr = new Collection<string>()
colletionSrr.add('1')
colletionSrr.add('1')
colletionSrr.add('3')
colletionSrr.remove('3')
console.log(colletionSrr)