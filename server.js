//  const prompt = require('prompt-sync')
// console.log("Hello World")
var slugify = require('slugify')
let a = slugify('some string')
console.log(a)

slugify('some string') // some-string

// if you prefer something other than '-' as separator
const b =slugify('some st&&*(^%^&ring', '_')  // some_string
console.log(b)