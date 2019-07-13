import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Change } from '../../interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'app-delete',
  templateUrl: 'delete.component.html'
})

export class DeleteComponent {
  @Input() value: string | number;
  @Input() isEnable: boolean = true;
  @Input() key: string = 'id';
  @Output() change: EventEmitter<Change> = new EventEmitter();

  delete(value) {
    this.change.emit(
      {
        typeChange: 'remove',
        value: value,
        key: this.key,
      }
    )
    // ).catch((err) => { })
  }

  agInit(params, key, value): void {
    this.value = value;
    // this.isEnable = params.isEn;
    this.key = key;
  }
}