let myBook = {
  title: '1984',
  author: 'Geore Orwell',
  pageCount: 326,
}
console.log(`${myBook.title} by ${myBook.author}`)

let convertFahrenheit = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celcius: (fahrenheit + 32) * (5 / 9)
  }
}

let temps = convertFahrenheit(74)
console.log(temps)