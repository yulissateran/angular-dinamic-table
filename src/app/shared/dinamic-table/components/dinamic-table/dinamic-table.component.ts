import {
  Component, OnInit, Renderer2, EventEmitter, Input, Output,
  ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Change } from '../../interfaces/change';


@Component({
  selector: 'app-dinamic-table',
  templateUrl: 'dinamic-table.component.html',
  styleUrls: ['dinamic-table.component.css', '../../css/table.css']

})

export class DinamicTableComponent implements OnChanges {
  @Input() context: any;
  @Input() selectionMultiple: boolean = true;
  @Input() frameworkComponents: any;
  @Input() rowData: any[];
  @Input() columnDefs: any[];
  @Input() rowSelection: string;
  @Input() pagination: boolean;
  @Input() paginationPageSize: number;
  @Input() paginationNumberFormatter: boolean;
  @Input() add: boolean = true;
  @Input() conditionDelete: any;
  @Output() public change: EventEmitter<any> = new EventEmitter();
  public selectedRows: any[] = [];
  public emptyselectedRows: any[] = [];

  constructor(private _renderer: Renderer2) { }

  ngOnInit() {  }

  ngOnChanges(changes: SimpleChanges) { }

  handleChanges(change: Change) {
    const copyRowData = JSON.parse(JSON.stringify(this.rowData));
    switch (change.typeChange) {
      case 'remove':
        this.rowData = this.conditionDelete ? copyRowData.filter(this.conditionDelete) : copyRowData.filter((row) => row[change.key] !== change.value);
        this.change.emit(this.rowData);
        break;
      case 'checked':
         this.addCheck(copyRowData,change);
         
         this.rowData = copyRowData;
        break;
      case 'uncheck':
         this.removeCheck(change);
         console.log('SelectedRows',this.selectedRows);
         this.rowData = copyRowData;

        break;
      default:
          this.rowData = copyRowData;
        break;
    }
  }

  ngAfterViewInit() {}

    removeChecks(){
      const copySelectedRows = JSON.parse(JSON.stringify(this.emptyselectedRows));
      this.selectedRows = copySelectedRows;
      this.rowData = JSON.parse(JSON.stringify(this.rowData));
    }

    removeCheck(change){
      const copySelectedRows = JSON.parse(JSON.stringify(this.selectedRows));
      this.selectedRows = copySelectedRows.filter((row)=>{
        // console.log(row[change.key] !== change.value, row[change.key] , change.value, row.Ruc, change);
        return row[change.key] !== change.value});
    }

    addCheck(copyRowData, change){
      if(this.selectedRows.length === 0 || this.selectionMultiple){
        const row  = copyRowData.find((row)=>row[change.key] === change.value);
        const copySelectedRows = JSON.parse(JSON.stringify(this.selectedRows));
        this.selectedRows = copySelectedRows.concat(row);
      }
     }

     getSelectedRows = () => this.selectedRows;
     
}






