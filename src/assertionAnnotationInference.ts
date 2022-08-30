console.log('Type; assertion Anotation Inferance')
console.log('Type assertion')
let str = 'My string'
let knownStr = <string>str;


const anotherAssertion = (str as string)

const array:Array<string> = new Array()

const arr1 = new Array<string>()

console.log(array)
console.log(arr1)

interface Waring {
    text: string
}

// const formatErrorMessage = (prefix: string, value: string | Error | Waring) => {
//     if(isString(value) === 'string') {
//         return prefix + value
//     }

//     if('text' in value ){
//         return prefix + value.text
//     }

//     else {
//         return prefix + value.message
//     }
// }

// console.log(formatErrorMessage('Prefix', ' value'))

if(!Boolean(null)){
    console.log(`It is false`) 
}




function truthOrNot(value:string | Error){
    if(!value){
        return 'It is true'
    }

    if(value instanceof Error){
        return `It is Error`
    }

    return 'false'
}


console.log(truthOrNot(''))

const isString = (vale: any): vale is string => typeof vale === 'string'

console.log(isString('this is string'))
console.log(isString(2))