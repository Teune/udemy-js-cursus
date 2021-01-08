const todos = [
  {
    text: 'order cat food',
    completed: false,
  },
  {
    text: 'Clean kitchen',
    completed: true,
  },
  {
    text: 'order dog food',
    completed: true,
  },
  {
    text: 'buy food',
    completed: false,
  },
  {
    text: 'Go exercise',
    completed: true,
  },
]

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
}

const getThingsTodo = function (todos) {
  return todos.filter(function (todo, index) {
    return !todo.completed
  })
}

sortTodos(todos)
console.log(todos)

// deleteTodo(todos, 'buy food')
// console.log(todos)

// const todos = [
//   'Walk the dog',
//   'Lunch',
//   'Nog meer eten',
//   'Bamisoep eten',
//   'Spareribs eten',
// ]

// let msg = `You have ${todos.length} todos`

// console.log(msg)
// console.log(todos[1])
// console.log(todos[todos.length - 1])

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1
//   const todo = todos[count]
//   console.log(`${num}. ${todo}`)
// }

// todos.forEach(function (todo, index) {
//   console.log(`${index}. ${todo}`)
// })
