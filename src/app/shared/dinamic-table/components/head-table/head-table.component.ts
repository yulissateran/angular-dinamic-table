import {
    Component, OnInit, Renderer2, EventEmitter, Input, Output,
    ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges
  } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

  
  
  
  @Component({
    // moduleId: module.id,
    selector: 'app-head-table',
    templateUrl: 'head-table.component.html',
    styleUrls: [ '../../css/table.css']
  
  })
  
  export class HeadTableComponent   {
      @Input() columnDefs: any[];
  
  }  