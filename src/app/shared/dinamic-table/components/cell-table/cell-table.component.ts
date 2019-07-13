import {
  Component, OnInit, Renderer2, EventEmitter, Input, Output,
  ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, ComponentFactoryResolver, ViewContainerRef
} from '@angular/core';
import { Change } from '../../interfaces/change';
import { CellContentComponent } from '../cell-content/cell-content.component';
import { DinamicContDirective } from 'src/app/shared/directives/dinamic-content.directive';
import { CheckboxComponent } from 'src/app/shared/checkbox/checkbox.component';

@Component({
  selector: 'app-cell-table',
  templateUrl: 'cell-table.component.html',
  styleUrls: ['cell-table.component.css', '../../css/table.css']
})

export class CellTableComponent {
  @Input() row: any;
  @Input() column: any;
  @Input() key: any[];
  @Input() value: any[];
  @Input() frameworkComponents: any[];
  @Output() change: EventEmitter<Change> = new EventEmitter();
  public component: any;
  @ViewChild(DinamicContDirective , {static: true}) injectHost: DinamicContDirective;


  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
    public _viewContainerRef: ViewContainerRef) {
  }
  ngOnInit() {
    console.clear();
    console.log(this.frameworkComponents);
    if(this.column.checkboxSelection){
      this.renderCheckbox();
    }
    if(this.column.cellRenderer){
      this.showDinamicComponent();
    } else {
      this.showValueCell()
    }
  }

  showDinamicComponent() {
    const ref = this.injectHost.viewContainerRef;
    const component = this.frameworkComponents[this.column.cellRenderer]
    const factory = this._componentFactoryResolver.resolveComponentFactory(component);
    ref.clear();
    this.component = ref.createComponent(factory);
    this.component.instance.agInit(this.row, this.column.field, this.row[this.column.field]);
    this.component.instance.change.subscribe((change: Change ) =>{
      console.log('change', change);
      this.change.emit(change) 
    });
  }
  renderCheckbox(){
    const ref = this.injectHost.viewContainerRef;
    const component = CheckboxComponent;
    const factory = this._componentFactoryResolver.resolveComponentFactory(component);
    // ref.clear();
    this.component = ref.createComponent(factory);
    this.component.instance.agInit(this.row, this.column.field,this.row[this.column.field]);
    this.component.instance.change.subscribe((change: Change ) =>{
      console.log('change', change);
      this.change.emit(change) 
    });
  }
  showValueCell(){
    const ref = this.injectHost.viewContainerRef;
    const component = CellContentComponent
    const factory = this._componentFactoryResolver.resolveComponentFactory(component);
    // ref.clear();
    this.component = ref.createComponent(factory);
    this.component.instance.agInit(this.row, this.column.field,this.row[this.column.field]);
    this.component.instance.change.subscribe((change: Change ) =>{
      console.log('change', change);
      this.change.emit(change) 
    });
  }
}
