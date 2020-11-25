/* eslint-disable */

type Foo<T extends any[]> = [boolean, ...T, boolean];

type Address = [
    streetAddress?: number, 
    town?: string, 
    state?: string, 
    postalCode?: number
];

function printAddress(...address: Address) {
 console.log(address)   
}

printAddress()

type JSONValue = | string | number | boolean | null | JSONValue[] | {[k:string]: JSONValue};



const val: JSONValue = {
    name: 'mike',
    address : {
        street: "pba"
    }
}
// typescript beta 4.1
// type Corner = `${'top'| 'bottom'}-${'left' | 'right'}`

function assertIsError(err: any): asserts err is Error {
    if (!(err instanceof Error)){
        throw new Error(`Not an Error: ${err} !`)
    }
}

// function isError(err: any): err is Error {
//     return err instanceof Error;
// }

type Bar = number;
// @ts-expect-error
const num: Bar = "test";
// @ts-ignore
const numba: Bar = "test";

function somethingRisky(){}

try{
    somethingRisky()
} catch (err: unknown) {
   console.log(assertIsError(err))
}


