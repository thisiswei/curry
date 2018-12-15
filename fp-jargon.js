// https://github.com/shfshanyue/fp-jargon-zh

const sum = (a, b) => a + b
const arity = sum.length
console.log(sum(1,2))
console.log(arity)


// higher order functions
const filter = (predicate, xs) => xs.filter(predicate)
const is = (type) => (x) => Object(x) instanceof type
console.log(filter(is(Number), [null, 1, 2, 3, "string"]))


// partial
const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs)
const add3 = (a, b, c) => a + b + c
const add5 = partial(add3, 2, 3)
console.log(add5(10))
const add1more = add3.bind(null, 2, 3)
console.log(add1more(11))


// curry
const curriedSum = (a) => (b) => a+b
console.log(curriedSum(3)(4))
const curriedSum3 = curriedSum(3)
console.log(curriedSum3(4))


// auto curry
_ = require('lodash')
const add = (x, y) => x + y
const curriedAdd = _.curry(add)
console.log(curriedAdd(1, 2))
console.log(curriedAdd(1)(2))


// function composing
const compose = (f, g) => (a) => f(g(a))
const floorAndToString = compose((val) => val.toString(), Math.floor)
console.log(floorAndToString(12.12))


// continuation
const printString =  (num) => console.log(`Given number: ${num}`)
const addOneAndContinue = (num, cc) => {
    const result = num + 1
    cc(result)
}
console.log(addOneAndContinue(2, printString))


const greet = (name) => `hello, ${name}`
console.log(greet('world'))


const map = (fn) => (list) => list.map(fn)
const addyo = (a) => (b) => a + b
const incrementAll = map(addyo(1))
console.log(incrementAll([1,2,2]))


// contract
const contract = (input) => {
    if (typeof input === 'number') return true
    throw new Error('violated')
}

const addOne = (num) => contract(num) && num+1
console.log(addOne(2))
// console.log(addOne('hello'))

