import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../model/patient.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private _patient : Patient;
  private _patients : Array <Patient>;
  private url : string = "http://localhost:8090/api/PR/patient";

  public save(): Observable<Patient>{
    console.log(this.url);
    this._patients.push(this.clonePatient(this._patient));
    return this.http.post<Patient>(this.url + "/", this._patient);
  }

  public findAll() : Observable<Array<Patient>>{
    console.log(this.url);
    return this.http.get<Array<Patient>>(this.url + "/");
  }


  constructor(private http : HttpClient) { }


  get patient(): Patient {
    if(this._patient == null)
    {
      this._patient = new Patient();
    }
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }

  get patients(): Array<Patient> {
    if(this._patients == null)
    {
      this._patients = new Array<Patient>();
    }
    return this._patients;
  }

  set patients(value: Array<Patient>) {
    this._patients = value;
  }

  private clonePatient(patient : Patient)
  {
    const clone_patient = new Patient();
    clone_patient.id = patient.id;
    clone_patient.cin = patient.cin;
    clone_patient.nom = patient.nom;
    clone_patient.password = patient.password;

    return clone_patient;
  }
}

