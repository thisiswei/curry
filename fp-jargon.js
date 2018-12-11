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

