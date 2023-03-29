import {Prescription} from "./prescription.model";

export class Seance {

  public id : number;
  public dateDebut : Date;
  public dateFin : Date;
  public prescription : Prescription;
  public presence : boolean;
  public  reference : string;
}
