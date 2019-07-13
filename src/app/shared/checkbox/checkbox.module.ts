import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
    imports: [RouterModule, CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        SharedDirectivesModule],
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    entryComponents: [CheckboxComponent]
})

export class CheckboxModule { }
