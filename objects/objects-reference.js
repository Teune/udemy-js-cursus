let myAccount = {
  name: 'Tony van Schaik',
  expenses: 0,
  income: 0,
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
  console.log(account)
}

// Add income
let addIncome = function (account, income) {
  account.income = account.income + income
}

// Reset account
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// Get Account Summary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. ${account.income} in income.  ${account.expenses} in expenses.`
}

// Account for Tony has 900. 1000 in income. 100 in expenses.
addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 100)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
