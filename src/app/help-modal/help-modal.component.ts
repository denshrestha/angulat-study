import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent {
  @Output() hide: EventEmitter<any> = new EventEmitter()

  closeDialog(){
    this.hide.emit('close')
  }
}
