import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { DinamicTableComponent } from './components/dinamic-table/dinamic-table.component';
import { HeadTableComponent } from './components/head-table/head-table.component';
import { CellContentComponent } from './components/cell-content/cell-content.component';
import { CellTableComponent } from './components/cell-table/cell-table.component';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CheckboxModule } from '../checkbox/checkbox.module';

@NgModule({
    imports: [RouterModule, CommonModule,
        SharedDirectivesModule,
        CheckboxModule
    ],
    declarations: [
        DinamicTableComponent, HeadTableComponent, CellContentComponent, CellTableComponent,

    ],
    exports: [
        DinamicTableComponent, CellContentComponent, CellTableComponent, HeadTableComponent
    ],
    entryComponents: [DinamicTableComponent, CellContentComponent]
})

export class DinamicTableModule { }
