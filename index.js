const chalk = require('chalk');
const text = require('./data')

console.log(chalk.blueBright(text))

console.log(__dirname)


// module path
const path = require('path')
console.log('Filename: ', path.basename(__filename))

console.log('Parse: ', path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))


// module fs
const fs = require('fs')
// fs.mkdir(path.join(__dirname, 'test') , (error) => {
//     if (error) {
//         throw(error)
//     }
//     console.log('operation OK')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Text from index.js', error => {
    if (error) {
        throw (error);
    }
    //console.log('File created')
})

fs.appendFile(filePath, '\nAppend Text from index.js', error => {
    if (error) {
        throw (error);
    }
    //console.log('File appended')
})


fs.readFile(filePath, (error, content) => {
    if (error) {
        throw error
    }
    const data = Buffer.from(content)
    //console.log('File Content:', data.toString())
})


fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
        throw error
    }
    //console.log('File Content:', content)
})

// os module
const os = require('os')

console.log('OS:', chalk.blue(os.platform()))
console.log('arch:', chalk.bold(os.arch()))
console.log('CPU:', os.cpus())
console.log('Free Memory:', os.freemem())
console.log('Free Memory:', os.totalmem())
console.log('Uptime:', os.uptime())

// events
const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('something', data => {
    console.log('Data:', data)
})

emitter.emit('something', {a: 1, b: 2})

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('Dispatching')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('test', data => {
    console.log('ON: test ', data)
})
dis.dispatch('test', {a: 1, b: 2})


// http
const http = require('http')
const server = http.createServer((request, response) => {
    response.end('<h1>This is the end, beautiful friend</h1><h2>This is the end, my only friend</h2>')
})

server.listen(3000, () => {
    console.log('server has been started...')
})

