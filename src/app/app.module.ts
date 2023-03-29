import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrescriptionCreateComponent } from './view/prescriptions/prescription-create/prescription-create.component';
import { PrescriptionListComponent } from './view/prescriptions/prescription-list/prescription-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SeanceCreateComponent } from './view/seances/seance-create/seance-create.component';
import { SeanceListComponent } from './view/seances/seance-list/seance-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrescriptionCreateComponent,
    PrescriptionListComponent,
    SeanceCreateComponent,
    SeanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
