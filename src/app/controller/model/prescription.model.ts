import {Seance} from "./seance.model";
import {Consultation} from "./consultation.model";
import {EtatPrescription} from "./etat-prescription.model";
import {Frequence} from "./frequence.model";
import {Patient} from "./patient.model";

export class Prescription {
  public id : number ;
  public datePrescription : Date;
  public nbrTotalSeance : number;
  public  ref : string ;
  public patient : Patient;
  public frequence : Frequence;
  public  seances : Array<Seance>;
  public  consultations : Array<Consultation>;
  public dateDebut : Date;
  public etatPresci : EtatPrescription;


}
