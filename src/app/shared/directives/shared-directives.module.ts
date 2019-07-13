import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DinamicContDirective } from './dinamic-content.directive';

@NgModule({
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ],
    declarations: [DinamicContDirective],
    exports: [DinamicContDirective],
    entryComponents: []
})

export class SharedDirectivesModule { }
