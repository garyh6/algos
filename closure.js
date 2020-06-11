function createCounter() {
    let counter = 0
    const myFun = () => {
        counter += 1 
        return counter
    }

    return myFun
}

const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()

console.log('incrementing', c1, c2, c3)