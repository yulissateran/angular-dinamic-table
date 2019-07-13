import { Component, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Change } from '../dinamic-table/interfaces/change';

@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css']
})

export class CheckboxComponent  implements OnChanges, OnInit {
  @Input() isSelectable: boolean = true;
  @Input() selectedRows: any[];
  // @Input() id: string | number;
  @Input() key: string | number;
  @Input() value:  any;
  @Input() isChecked: boolean = false;
  @Output() change: EventEmitter<Change> = new EventEmitter();

  clicked(value) {
    console.log('value',value, 'checked: ', this.isChecked);
    if(this.isChecked) {
      this.change.emit({
        typeChange: 'uncheck',
        key: this.key,
        value: value,
      });
    }
    if(!this.isChecked)  {
      this.change.emit({
        typeChange: 'checked',
        key: this.key,
        value: value,
      });
    this.isChecked = !this.isChecked;
    }
  }

  ngOnChanges(change: SimpleChanges){
    this.isChecked = this.selectedRows.some((row)=>row[this.key] === this.value )
  }

  ngOnInit(){
    console.log('selectedrows',this.selectedRows);

    this.isChecked = this.selectedRows.some((row)=>row[this.key] === this.value )
  }

  agInit(params, key, value){
    // console.log(params, key, value);
    this.key= key;
    this.value= value;
  }
}
