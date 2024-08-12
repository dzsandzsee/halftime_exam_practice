const data = require('./data')

const countCompletedTodos = (todosArr) => {
    let complettedTodosCounter = 0
    //todosArr.forEach(todo => todo.completed ? complettedTodosCounter++ : "")
    return todosArr.filter(todo => todo.completed).length

   
}
console.log(countCompletedTodos(data))

const collectUniqueUserIds = (todosArr) => {
    const uniqueIds = []
   todosArr.forEach(todo => (!uniqueIds.includes(todo.userId)) ? uniqueIds.push(todo.userId) : null)
console.log(uniqueIds)
}
console.log(collectUniqueUserIds(data))