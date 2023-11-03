const fs = require('fs');

fs.readFile('./content/first.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.readFile('./content/first.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

fs.readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})