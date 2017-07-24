"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("=========== NEW TASK ===========\nTask \"" + task.title + "\" inserted in the list");
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task.title);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log("=========== TASK REMOVED ===========\nTask \"" + task.title + "\" removed from the list");
        return this.tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.tasks.forEach(function (task) {
            if (task.status === false) {
                console.log(task.title);
            }
        });
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
//# sourceMappingURL=main.js.map