let getScoreText = function (name = 'NoName', score = 0) {
  return 'Name: ' + name + 'Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

let getTotal = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTotal(100, 0.25)
console.log(tip)

let firstname = 'Jen'
console.log(`Hey, my name is ${firstname}!`)
