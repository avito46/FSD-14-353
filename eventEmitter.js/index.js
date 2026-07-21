/*EVENT EMITTER*/ 
import {EventEmitter} from 'node:events'
const sayHi=(name)=>{
    console.log(`${name} logged in`)
}
const task=new EventEmitter()
task.on("greet",sayHi) //greet is a keyword
task.on("greet",(name)=>{
    console.log(`${name} starts working`)
})
task.on("exit",(name)=>{
    console.log(`${name} starts working`)
})
task.on("greet",(name)=>{
    console.log(`${name} logged out`)
})
task.once("greet",(name)=>{
    console.log(`${name} is still working`)
})
task.off("exit",(name)=>{
    console.log(`${name} starts working`)   //isko samajhna hai
})
task.emit("greet","Rahul Singh")
task.emit("greet","Kevin")
task.emit("exit","Manager")//executed only once
task.emit("exit","Bob")//won't effect
//also study task.removeAllListners and task.listenerCount("greet")