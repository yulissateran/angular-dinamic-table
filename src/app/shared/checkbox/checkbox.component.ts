import { Component, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Change } from '../dinamic-table/interfaces/change';

@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css']
})

export class CheckboxComponent  implements OnChanges {
  @Input() isSelectable: boolean = true;
  // @Input() id: string | number;
  @Input() key: string | number;
  @Input() value:  any;
  @Input() isChecked: boolean = false;
  @Output() checked: EventEmitter<string | number> = new EventEmitter();
  @Output() change: EventEmitter<Change> = new EventEmitter();
  @Output() uncheck: EventEmitter<string | number> = new EventEmitter();

  clicked(value) {
    console.log('id',id, 'checked: ', this.isChecked);
    if(this.isChecked) {
      // this.uncheck.emit(id);
      this.change.emit({
        typeChange: 'uncheck',
        key: this.key,
        value: value,
      });
    }
    if(!this.isChecked)  {
      // this.checked.emit(id);
      this.checked.emit(id);
    this.isChecked = !this.isChecked;
    }
  }

  ngOnChanges(change: SimpleChanges){
    if(change.isChecked){
      console.log('change', this.id,change.isChecked.currentValue)
      this.isChecked = change.isChecked.currentValue;
    }
  }

  agInit(params, key, value){
    this.isChecked = value;
  }
}
