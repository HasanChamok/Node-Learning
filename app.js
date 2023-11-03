// const method = require('./6-BuiltinOsFunctions')

// console.log(method.sh.name)

//New way of using another exported file
const { readFileSync,writeFileSync } = require('fs')

const first = readFileSync('./Content/first.txt','utf8')
const second = readFileSync('./Content/second.txt','utf8')

writeFileSync(
    '.Content/result-sync.txt'
)