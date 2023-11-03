// console.log(__dirname)

// *** SET Interval and SETTimeout Function

setInterval(() => {
    console.log('Hello Hasan')
},1000)

setTimeout(() => {
    console.log('Hello Hasan')
}, 5000);

const sayHello = (name) => {
    console.log('Say hello to ' + name)
}

module.exports = {sayHello}