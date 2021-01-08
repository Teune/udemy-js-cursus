//  let fullName = "Tony van Schaik"
//  console.log(fullName.length)
//  console.log(fullName.toUpperCase())
let password = 'abc133'
console.log(password.includes('password'))

 let isValidPassword = function(password) {
     if (password.length > 8 && !password.includes('password')) {
         return true
     } else {
         return false
     }
 }