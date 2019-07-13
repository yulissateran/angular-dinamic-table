import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteModule } from './shared/delete/delete.module';
import { DinamicTableModule } from './shared/dinamic-table/dinamic-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeleteModule,
    DinamicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
