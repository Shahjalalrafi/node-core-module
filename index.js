// const path = require('path') 

// const myPath = 'C:/wdd/Node practice/core-module/Index.js'

// console.log(path.basename(myPath))
// console.log(path.parse(myPath))
// console.log(path.toNamespacedPath(myPath))

// const fs = require('fs')

// // fs.writeFile('myFile.txt', 'hello programmerss')
// // fs.appendFile('myFile.txt', ' hi everyOne')

// const data = fs.readFile('myFile.txt')

// console.log(data.toString())

// console.log('hello')

// const fs = require('fs')

// fs.readFile('myFile.txt', (err, data) => {
//     console.log(data.toString())
// })

// console.log('hello everyOne')



// const EventEmiter = require('events')

// const emitter = new EventEmiter

// emitter.on('running' ,() => {
//     console.log('we need to run')
// } )


// emitter.emit('running')





const School = require('./school')


const school = new School()
school.started()

school.on('starting', ({period, text}) => {
    console.log(`i have to start because ${period} ${text}`)
})

school.started()

console.log('hello')


// const http = require('http')

// http.createServer()

