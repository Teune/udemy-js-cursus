const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to germany',
  },
  {
    title: 'I love my work 2',
    body: 'I would like to go to spain',
  },
  {
    title: 'Office modifications',
    body: 'get new seat',
  },
]

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    }
    else {
      return 0
    }
  })
}

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

sortNotes(notes)
console.log(notes)

// console.log(findNotes(notes, 'spain'))

// const note = findNote(notes, 'my next trip 2')
// console.log(note)

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note,index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.unshift('My First note'))
// notes.splice(1,0, 'This is the new second item')

// notes.forEach(function(item,index){
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }
