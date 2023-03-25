import { Injectable } from '@angular/core';
import {Prescription} from "../model/prescription.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private _prescription : Prescription;
  private _prescriptions : Array<Prescription>;
  private url : "http://localhost:8090/api/PR/prescription/"

  public save() : Observable<Prescription>{
    return this.http.post<Prescription>(this.url, this._prescription);
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
}
