import { Injectable } from '@angular/core';

export interface ToDoItem{
  title: String,
  priority: String,
  completed: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: ToDoItem[] = [
    {
      title: 'Buy Milk',
      priority: 'low',
      completed: true
    },
    {
      title: 'Learn Angular',
      priority: 'high',
      completed: false
    }
  ]

  constructor() {}

  getList(): ToDoItem[] {
    return this.todoList
  }

  deleteItem(id: Number){
    const index = this.todoList.findIndex((item, idx) => idx === id)
    if(index > -1){
      this.todoList.splice(index, 1)
    }
  }

  editItem(id: Number, value: ToDoItem){
    const index = this.todoList.findIndex((item, idx) => idx === id)
    if(index > -1){
      this.todoList[index] = value
    }
  }

  addItem(item: ToDoItem ){
    this.todoList.push(item)
  }

  changeStatus(id: Number){
    const index = this.todoList.findIndex((item, idx) => idx === id)
    if(index > -1){
      this.todoList[index].completed = !this.todoList[index].completed
    }
  }
}
