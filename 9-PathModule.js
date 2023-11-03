const path = require('path')

console.log(path.sep)

const filepath  = path.join('/Content','folder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolutePath = path.resolve(__dirname,'Content','folder','text.txt')
console.log(absolutePath)