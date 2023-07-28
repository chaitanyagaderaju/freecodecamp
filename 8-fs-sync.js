const { readFileSync, writeFileSync } = require('fs')

console.log("first line")
const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')

writeFileSync('./content/thrid.txt', `merge ${first}, ${second}`,{flag:'a'})
console.log("Done with the task")
console.log("Runing the next one")