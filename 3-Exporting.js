//Common js, every file is module (by default)
// Modeules - Encapsulated Code (Only share minimum)

const name = require('./2-Modules')
const time = require('./1-Intro-Basic')
const data = require('./4-alternate')

console.log(data)

console.log(name)

name.sayHi(name.c)
time.sayHello(name.c)