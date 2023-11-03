//Local Variable

const h = 'Hasan'

//Global or Share variable that can be accessed from anywhere
const c = 'Chamok'

const sayHi = (name) => {
    console.log('Hello ' + name )
}

sayHi(h+c)

module.exports = {c,sayHi}
// console.log(module)