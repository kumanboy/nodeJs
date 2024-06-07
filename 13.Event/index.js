import EventEmitter from "events";

//Misol

const customEmitter = new EventEmitter();

//eventEmitter constructor class va uning metodlari
//1: on: listen/register qiladi eventni
//2: once: listen/register qiladi eventni
//3: emit: ishga tushiradi\chaqiradi eventni

customEmitter.once("response",(name,id) =>{
    console.log(`user: ${name} id: ${id}`);
})

customEmitter.emit("response","husan",1)
customEmitter.emit("response","bobur",2)
customEmitter.emit("response","asil",3)
