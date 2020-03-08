/*
const details = [
  { label: "Survey title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Email body", name: "body" },
  { label: "Recipients", name: "recipients" }
]

details.map(data => {
  console.log(data)
})

const details2 = [
  { label: "Survey title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Email body", name: "body" },
  { label: "Recipients", name: "recipients" }
]

Object.keys(details2).map(key => {
  console.log(details2[key])
})

const details3 = {
  label: "Survey title",
  name: "title"
}

Object.keys(details3).map(key => {
  // console.log(details3[key])
  document.write(details3[key] + "<br>")
})
const tester = (a, callback) => {
  callback()
}

tester(4, () => console.log("dude"))
*/

const increment = (function() {
  return function increment(num1, num2) {
    return num1 + num2
  }
})()

console.log(increment(2, 5))
