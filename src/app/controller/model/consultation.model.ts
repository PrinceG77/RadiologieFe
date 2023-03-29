import {Prescription} from "./prescription.model";

export class Consultation {

  public id : number;
  public dateConsultation : Date;
  public libelle : string;
  public prescription : Prescription;
  public descriptif : string;
}
