const todoList = () => {
    let all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    let todayDate = new Date().toISOString().split("T")[0]; // add today date
    const overdue = () => {
        return all.filter((todoItem) => todoItem.dueDate < todayDate); //
    }
    const dueToday = () => {
        return all.filter((todoItem) => todoItem.dueDate == todayDate);
    }
    const dueLater = () => {
        return all.filter((todoItem) => todoItem.dueDate > todayDate);
    }
    const toDisplayableList = (list) => {
        let formatted = list.map((todoItem) => {
            if (todoItem.dueDate == todayDate) {
                return "[" + (todoItem.completed ? "x" : " ") + "] " + todoItem.title;
            }
            return "[" + (todoItem.completed ? "x" : " ") + "] " + todoItem.title + " " + todoItem.dueDate;
        }).join("\n");
        return formatted;
    }

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const todayDate = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: todayDate, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: todayDate, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due todayDate")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")