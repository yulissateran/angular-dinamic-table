import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Change } from '../../interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'cell-content',
  templateUrl: 'cell-content.component.html'
})

export class CellContentComponent {
  @Input() value: string | number;
  @Input() key: string = 'id';
  @Output() change: EventEmitter<Change> = new EventEmitter();


  agInit(params, key, value): void {
    this.value = value;
    this.key = key;
  }
}

