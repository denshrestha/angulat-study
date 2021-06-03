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

  getList() :ToDoItem[] {
    return this.todoList
  }

  deleteItem(id: Number): void{
    console.log(id)
    const index = this.todoList.findIndex((item, index) => index === id)
    if(index > -1){
      this.todoList = this.todoList.splice(index, 1)
    }
    console.log(this.todoList)
  }

  editItem(id: Number, value: ToDoItem): void{
    const index = this.todoList.findIndex((item, index) => index === id)
    if(index > -1){
      this.todoList[index] = value
    }
  }

  addItem(item: ToDoItem ): void{
    this.todoList.push(item)
    console.log(this.todoList)
  }

  changeStatus(id: Number): void{
    const index = this.todoList.findIndex((item, index) => index === id)
    if(index > -1){
      this.todoList[index].completed = !this.todoList[index].completed
    }
  }
}
