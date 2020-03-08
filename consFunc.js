/*
const venky = {
  name: "venky",
  age: 12,
  human: true,
  venkatesh: function() {
    console.log("Buddy")
  }
}

console.log(venky.venkatesh())

//constructor

function Person(age, name) {
  console.log("constuctor")
  console.log(age)
  console.log(name)

  this.age = age
  this.name = name
  this.newDob = function(dob) {
    return (this.number = dob)
  }
}

const obj1 = new Person(12, "venkat", 1994)
console.log(obj1.age)
console.log(obj1.newDob(1994))
*/

//constructor with prototype

/*
function Person(age, name) {
  this.age = age
  this.name = name
  this.newDob = function(dob) {
    return (this.number = dob)
  }
}
//creating a prototype with Person constructor (and linking )
Person.prototype.employee = function(employe) {
  return (this.employe = employe)
}

const obj1 = new Person(12, "venkat", 1994)
console.log(obj1.employee("19231"))

*/
// calculating date and time
/*
const date = new Date("9-12-2000").getTime()
const now = Date.now()
const diff = now - date
const result = new Date(diff)
console.log(Math.abs(result.getUTCFullYear() - 1970))

console.log("result", result)
console.log("date", date)
console.log("now", now)

*/
