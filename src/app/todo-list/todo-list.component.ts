import {Component} from '@angular/core';
import {TodoListService} from "./todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(
    private list: TodoListService
  ) {
    console.log(this.list)
  }
}
