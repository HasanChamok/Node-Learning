// require('./5-functions')

const os = require('os')

//Info about current user 
const user = os.userInfo()
console.log(user)

// method returns the uptime of the system in seconds 
console.log('The systems up time is about ' , os.uptime() , ' Seconds')

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
// console.log(currentOs)

module.exports.sh = currentOs