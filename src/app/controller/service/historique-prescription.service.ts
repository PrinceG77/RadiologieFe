import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Seance} from "../model/seance.model";
import {Observable} from "rxjs";
import {Prescription} from "../model/prescription.model";
import {HistoriquePrescription} from "../model/historique-prescription.model";

@Injectable({
  providedIn: 'root'
})
export class HistoriquePrescriptionService {
  private _historiquePrescription : HistoriquePrescription;
  private _historiquePrescriptions : Array<HistoriquePrescription>;
  private url = "http://localhost:8090/api/PR/historiquePrescription";

  public findAll() : Observable<Array<HistoriquePrescription>>{

    console.log(this.url);
    return this.http.get<Array<HistoriquePrescription>>(this.url + "/");


  }

  public findByPresccriptionRef(ref : string) : Observable<Array<HistoriquePrescription>>{

    console.log(this.url);
    return this.http.get<Array<HistoriquePrescription>>(this.url + "/prescription/ref/" + ref);


  }

  constructor(private http : HttpClient) { }


  get historiquePrescription(): HistoriquePrescription {
    return this._historiquePrescription;
  }

  set historiquePrescription(value: HistoriquePrescription) {
    if (this._historiquePrescription == null){
      this._historiquePrescription = new HistoriquePrescription();
    }
    this._historiquePrescription = value;
  }

  get historiquePrescriptions(): Array<HistoriquePrescription> {
    return this._historiquePrescriptions;
  }

  set historiquePrescriptions(value: Array<HistoriquePrescription>) {

    if (this._historiquePrescriptions == null){
      this._historiquePrescriptions = new Array<HistoriquePrescription>();
    }
    this._historiquePrescriptions = value;
  }
}



