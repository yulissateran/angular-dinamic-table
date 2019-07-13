import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Change } from '../dinamic-table/interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'app-delete',
  templateUrl: 'delete.component.html',
  styleUrls: ['delete.component.css']
})

export class DeleteComponent {
  @Input() id: string | number;
  @Input() isEnable: boolean = true;
  @Input() key: string = 'id';
  @Output() change: EventEmitter<Change> = new EventEmitter();

  delete(id) {
    // sweetAlertDeleteElement('¿Desea eliminar el elemento seleccionado?')
      // .then((res) => 
console.log('remove', id);

      this.change.emit({
        typeChange : 'remove',
        value: id,
        key: this.key,
      })
      // ).catch((err) => { })
  }

  agInit(params, key, value): void {
    this.id = value;
    this.key = key;
  }
}