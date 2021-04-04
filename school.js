const EventEmiter = require('events')

class School extends EventEmiter {
    started () {
        setTimeout(() => {
            this.emit('starting', {
                period: 'its',
                text: 'friday'
            })
        }, 1000)
    }
    
}


module.exports = School