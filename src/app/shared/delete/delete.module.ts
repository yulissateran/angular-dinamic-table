import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './delete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
    imports: [RouterModule, CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        SharedDirectivesModule],
    declarations: [DeleteComponent,
                  ],
    exports: [DeleteComponent],
    entryComponents: [DeleteComponent]
})

export class DeleteModule { }
