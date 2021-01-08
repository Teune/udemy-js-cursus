const account = {
  name: 'Tony van Schaik',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    // Add expense -> description, amount

    this.expenses.push({
      description: description,
      amount: amount,
    })
  },
  addIncome: function (description, amount) {
    // Add expense -> description, amount

    this.income.push({
      description: description,
      amount: amount,
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })

    accountBalance = totalIncome - totalExpenses

    return `${this.name} has a balance of €${accountBalance}, €${totalIncome} total in income.  €${totalExpenses} in expenses` // getAccountSummary -> total up all expanses > Tony has €1250 in expenses
  },
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Salary', 2000)
console.log(account.getAccountSummary())
