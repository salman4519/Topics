const events = require("events")

const ev = new events.EventEmitter();


ev.on('myEvent',function(data){      // can call for multiple times
    console.log("Event on :",data);
})

ev.once('onceEvent',()=> console.log("Event once : will only work once")) // only work once

ev.off() // used unregister or dont work

ev.emit('myEvent',"will work for each call")
ev.emit('myEvent',"will work for each call")



ev.emit('onceEvent')
ev.emit('onceEvent')