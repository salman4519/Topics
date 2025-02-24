const events = require('events')

const ev = new events()

const hello =()=>{
    console.log(`hello How are you`)
}
ev.once('great',hello)

ev.emit('great')
ev.emit('great')
ev.off('great',hello)
ev.emit('great')
ev.emit('great')
