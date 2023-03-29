import {Prescription} from "./prescription.model";
import {EtatPrescription} from "./etat-prescription.model";

export class HistoriquePrescription {

  public id : number;
  public prescription : Prescription;
  public dateHistorique : Date;
  public etatPrescription : EtatPrescription;

}
