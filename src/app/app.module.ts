import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrescriptionCreateComponent } from './view/prescriptions/prescription-create/prescription-create.component';
import { PrescriptionListComponent } from './view/prescriptions/prescription-list/prescription-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SeanceCreateComponent } from './view/seances/seance-create/seance-create.component';
import { SeanceListComponent } from './view/seances/seance-list/seance-list.component';
import {RouterModule, Routes} from "@angular/router";
import { MenuComponent } from './view/menu/menu.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { PatientCreateComponent } from './view/patients/patient-create/patient-create.component';
import { PatientListComponent } from './view/patients/patient-list/patient-list.component';
import { HomepageComponent } from './view/homepage/homepage.component';
import { HistoriquePrescriptionListComponent } from './view/historique-prescriptions/historique-prescription-list/historique-prescription-list.component';
import { LoginComponent } from './view/login/login.component';
import { UserTemplateComponent } from './view/user-template/user-template.component';
import {AuthenticationGuard} from "./guards/authentication.guard";

const appRoutes : Routes = [

  {path: 'user', component : UserTemplateComponent, canActivate : [AuthenticationGuard] ,children : [
      {path: 'homepage', component : HomepageComponent},
      {path: 'prescription-create', component : PrescriptionCreateComponent},
      {path: 'prescription-list', component : PrescriptionListComponent},
      {path: 'patient-list', component : PatientListComponent},
      {path: 'patient-create', component : PatientCreateComponent},
      {path: 'historique-prescription', component : HistoriquePrescriptionListComponent},
      {path: 'seance-create', component : SeanceCreateComponent},
      {path: 'seance-list', component : SeanceListComponent},
    ]},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: '**', component : PageNotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PrescriptionCreateComponent,
    PrescriptionListComponent,
    SeanceCreateComponent,
    SeanceListComponent,
    MenuComponent,
    PageNotFoundComponent,
    PatientCreateComponent,
    PatientListComponent,
    HomepageComponent,
    HistoriquePrescriptionListComponent,
    LoginComponent,
    UserTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
