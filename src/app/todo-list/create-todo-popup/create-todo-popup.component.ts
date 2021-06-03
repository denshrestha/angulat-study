import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItem} from "../todo-list.service";

@Component({
  selector: 'app-create-todo-popup',
  templateUrl: './create-todo-popup.component.html',
  styleUrls: ['./create-todo-popup.component.scss']
})
export class CreateTodoPopupComponent {

  @Input() todo: ToDoItem = {title: '', priority: 'none', completed: false}
  @Output() submit: EventEmitter<ToDoItem> = new EventEmitter

  submitChanges(){
    this.submit.emit(this.todo)
  }

}
