const http = require('http')

const server = http.createServer((req, res) => {
    res.write('hello programmers')
    res.write('how are you?')
})

server.listen(3000, () => 'listenning')

module.exports = server