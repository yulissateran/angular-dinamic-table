import {
  Component, OnInit, Renderer2, EventEmitter, Input, Output,
  ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Change } from '../../interfaces/change';


@Component({
  // moduleId: module.id,
  selector: 'app-dinamic-table',
  templateUrl: 'dinamic-table.component.html',
  styleUrls: ['dinamic-table.component.css', '../../css/table.css']

})

export class DinamicTableComponent  implements OnChanges {
  @Input() context: any;
  @Input() frameworkComponents: any;
  @Input() rowData: any[];
  @Input() columnDefs: any[];
  @Input() rowSelection: string;
  @Input() pagination: boolean;
  @Input() paginationPageSize: number;
  @Input() paginationNumberFormatter: boolean;
  @Output() public gridReady: EventEmitter<any> = new EventEmitter<any[]>();


  @ViewChild('btnCloseMdlProviders', {static: false}) btnCloseMdlProviders: ElementRef;
  @Input() add: boolean = true;
  @Input() conditionDelete: any;
  @Output() public change: EventEmitter<any> = new EventEmitter();
  public formSearchProviders: FormGroup;
  public selectedProviders: any[] = [];



  constructor(private _renderer: Renderer2) {


  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {}

   handleChanges(change: Change){
     const copyRowDta = JSON.parse(JSON.stringify(this.rowData));
     switch (change.typeChange) {
       case 'remove':
         this.rowData =  this.conditionDelete? copyRowDta.filter(this.conditionDelete): copyRowDta.filter((row) => row[change.key] !== change.value);
         this.change.emit(this.rowData);
         break;
       default:
         break;
     }

   }


  ngAfterViewInit() { 


  // removeChecks(){
  //   const copyProviders = JSON.parse(JSON.stringify(this.providersBD));
  //   this.providersBD = copyProviders.map((provider)=>{
  //       provider.isChecked = false;
  //       return provider;
  //     })

  }



}






