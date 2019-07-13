import { Component, ViewChild } from '@angular/core';
import { DeleteComponent } from './shared/delete/delete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dinamic-table-v8';
  @ViewChild('dinamicTable', {static: true})dinamicTable ;
  public frameworkComponents: any = { delete: DeleteComponent }
  public isEditableTable: boolean = false;
  public columnDefs = [
    {
      headerName: 'Ruc', field: 'Ruc', checkboxSelection: true,
      width: '20%'
    },
    { headerName: 'Nombre', field: 'Proveedor_Dirigido', width: '60%' },
    { headerName: 'Acciones', field: 'id', width: '20%', cellRenderer: "delete" },
  ];
  public rowData = [
    { Ruc: '123', Proveedor_Dirigido: 'prov 1', id: '1754bg4436' },
    { Ruc: '13', Proveedor_Dirigido: 'prov 2', id: '1754446' },
    { Ruc: '23', Proveedor_Dirigido: 'prov 3', id: '175436' },
    { Ruc: '223', Proveedor_Dirigido: 'prov 4', id: '44436' },
    { Ruc: '323', Proveedor_Dirigido: 'prov 5', id: '127544aq436' },
    { Ruc: '423', Proveedor_Dirigido: 'prov 6', id: '17bg4544436' },
    { Ruc: '523', Proveedor_Dirigido: 'prov 7', id: '1752344436' },
    { Ruc: '623', Proveedor_Dirigido: 'prov 8', id: '175i4454436' },
    { Ruc: '723', Proveedor_Dirigido: 'prov 9', id: '1754f497436' },
    { Ruc: '823', Proveedor_Dirigido: 'prov 10', id: '1754r44-36' },
    { Ruc: '923', Proveedor_Dirigido: 'prov 11', id: '17544h43vr6' },
    { Ruc: '1023', Proveedor_Dirigido: 'prov 12', id: '17544ksdf43d6' },
    { Ruc: '1123', Proveedor_Dirigido: 'prov 13', id: '175444lll3d6' },
  ]

  handleChanges(event) {
    console.log(event);

    this.rowData = event;
  }
}
