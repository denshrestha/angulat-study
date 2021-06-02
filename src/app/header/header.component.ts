import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {
  title = 'Test App'

  @Output() show: EventEmitter<any> = new EventEmitter()

  openDialog(){
    this.show.emit()
  }
}
