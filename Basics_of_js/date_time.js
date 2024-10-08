// 
let myDate  = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let mynewDate = new Date(2025,7,30) // months start with zero
console.log(mynewDate.toDateString());

let myRandomDate = new Date("2023-01-14")
console.log(myRandomDate.toLocaleString())

// indian date style
let indiaDate = new Date("01-08-2024")
console.log(indiaDate.toLocaleString)

// time stamp 
let mytimeStamp = Date.now()
console.log(mytimeStamp)
console.log(indiaDate.getTime())
// in seconds

console.log(Math.floor(Date.now()/1000))


/**
 futher knowledge
 */

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())










