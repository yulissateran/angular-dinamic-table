import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Change } from '../../interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'app-delete',
  templateUrl: 'delete.component.html'
})

export class DeleteComponent {
  @Input() id: string | number;
  @Input() isEnable: boolean = true;
  @Input() key: string = 'id';
  @Output() change: EventEmitter<Change> = new EventEmitter();

  delete(id) {
      this.change.emit(
        {
        typeChange : 'remove',
        value: id,
        key: this.key,
      }
      )
      // ).catch((err) => { })
  }

  agInit(params, key, value): void {
    this.id = value;
    this.isEnable = params.isEnable;
    this.key = key;
  }
}