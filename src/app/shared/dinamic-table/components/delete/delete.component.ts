import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

import { Change } from '../../interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'app-delete',
  templateUrl: 'delete.component.html'
})

export class DeleteComponent implements OnInit{
  @Input() value: string | number;
  @Input() isEditable: boolean = true;
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

  ngOnInit(){
    console.log('isEditable', this.isEditable);
    
  }

  agInit(params, key, value): void {
    this.value = value;
    // this.isEnable = params.isEn;
    this.key = key;
  }
}