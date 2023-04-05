import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Seance} from "../model/seance.model";
import {Observable} from "rxjs";
import {Prescription} from "../model/prescription.model";

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private _seance : Seance;
  private _seances : Array<Seance>;
  private url = "http://localhost:8090/api/PR/seance";

  public findAll() : Observable<Array<Seance>>{

    console.log(this.url);
    return this.http.get<Array<Seance>>(this.url + "/");


  }

  public findByPresccriptionRef(ref : string) : Observable<Array<Seance>>{

    console.log(this.url);
    return this.http.get<Array<Seance>>(this.url + "/prescription/ref/" + ref);


  }

  constructor(private http : HttpClient) { }


  get seance(): Seance {

    if(this._seance == null){
      this._seance = new Seance();
    }
    return this._seance;
  }

  set seance(value: Seance) {
    this._seance = value;
  }

  get seances(): Array<Seance> {
    if(this._seances == null){
      this._seances = new Array<Seance>();
    }
    return this._seances;
  }

  set seances(value: Array<Seance>) {
    this._seances = value;
  }
}



