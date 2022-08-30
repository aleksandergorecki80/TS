

console.log('1. GENERICS')
//      GENERICS

function reflectNumber(arg: number):number{
    return arg
}

function reflectString(arg: string):string{
    return arg
}

function reflect<T>(arg: T):T{
    return arg
}

console.log(reflectNumber(44))
console.log(reflectString('Johs'))

console.log(reflect<string>('Johs'))
console.log(reflect<number>(77))


console.log('2. Index type Querry and Lookup types')
//      Index type Querry and Lookup types

type Animal = {
    name: string;
    speed: number;
    size: number;
}

const animal: Animal = {
    name: 'Kot',
    speed: 200,
    size: 10
}

const animalProp: keyof Animal = "size";
console.log(animalProp, ' = animal prop')


const arr = ['one', 'two', 'three'];

console.log(arr[1])

function getProp<T, K extends keyof T>(obj:T, key: K){
    return obj[key]
}

console.log(getProp(animal, 'size'))


console.log('3. Template literal types')
//      Template literal types

type AccessControle = {
    posts: boolean;
    invoicess: boolean;
    messagess: boolean;
}

type AccessibleRecourses = keyof AccessControle;

const resources: AccessibleRecourses[] = ['invoicess'];

type AccessLevel = 'create' | 'read' | 'update' | 'delete';

type Scope = `${AccessLevel}:${AccessibleRecourses}`;

const scopes:Scope[] = ['create:posts'] 