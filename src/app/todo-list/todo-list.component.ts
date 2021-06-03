import {Component} from '@angular/core';
import {ToDoItem, TodoListService} from "./todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  toDose = this.list.getList()
  isPopupActive: Boolean
  defaultItem: ToDoItem = {
    title: '',
    priority: 'none',
    completed: false
  }
  idx: any = null

  constructor(
    private list: TodoListService
  ) {
    this.toDose = this.list.getList()
    this.isPopupActive = false
  }
  toggleForm(){
    this.isPopupActive = !this.isPopupActive
    if(!this.isPopupActive){
      this.defaultItem = {
        title: '',
        priority: 'none',
        completed: false
      }
      this.idx = null
    }
  }

  editTodo(id: any){
    this.idx = id
    let result = Object.assign({}, this.toDose[id])
    if(result){
      this.isPopupActive = true
      this.defaultItem = result
    }
  }

  submitChanges(event: any){
    console.log('event', event)
    if(this.idx){
      this.list.editItem(this.idx, event)
    } else {
      this.list.addItem(event)
    }
    this.defaultItem = {
      title: '',
      priority: 'none',
      completed: false
    }
    this.idx = null
    this.isPopupActive = false
  }

  deleteTodo(id: any){
    this.list.deleteItem(id)
  }
}
