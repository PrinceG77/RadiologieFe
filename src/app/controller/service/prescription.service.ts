import { Injectable } from '@angular/core';
import {Prescription} from "../model/prescription.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seance} from "../model/seance.model";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private _prescription : Prescription;
  private _prescriptions : Array<Prescription>;

  private _seance : Seance;

  public url : string;

  public save() : Observable<Prescription>{
    this.url = "http://localhost:8090/api/PR/prescription/";
    console.log(this.url);
    this._prescriptions.push(this.clonePrescription(this._prescription));
    return this.http.post<Prescription>(this.url, this._prescription);

}

  public findAll() : Observable<Array<Prescription>>{
    this.url = "http://localhost:8090/api/PR/prescription/";
    console.log(this.url);
    return this.http.get<Array<Prescription>>(this.url);


  }


  constructor(private http : HttpClient) { }


  get prescription(): Prescription {

    if(this._prescription == null)
    {
      this._prescription = new Prescription();
    }


    return this._prescription;
  }

  set prescription(value: Prescription) {
    this._prescription = value;
  }

  get prescriptions(): Array<Prescription> {
    if(this._prescriptions == null)
    {
      this._prescriptions = new Array<Prescription>();
    }
    return this._prescriptions;
  }

  set prescriptions(value: Array<Prescription>) {
    this._prescriptions = value;
  }


  get seance(): Seance {
    if(this._seance == null)
    {
      this._seance = new Seance();
    }
    return this._seance;
  }

  set seance(value: Seance) {
    this._seance = value;
  }

  private clonePrescription(prescription: Prescription) {
    const p_clone = new Prescription();
    p_clone.id = prescription.id;
    p_clone.ref = prescription.ref;
    p_clone.datePrescription = prescription.datePrescription;
    p_clone.dateDebut = prescription.dateDebut;
    p_clone.nbrTotalSeance = prescription.nbrTotalSeance;
    p_clone.frequence= prescription.frequence;
    p_clone.consultations = prescription.consultations;
    p_clone.patient = prescription.patient;
    p_clone.seances= prescription.seances;
    p_clone.etatPresci= prescription.etatPresci;

    return p_clone;
  }
}
