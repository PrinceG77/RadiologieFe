export class Prescription {
  public id : number ;
  public datePrescription : Date;
  public nbrTotalSeance : number;
  public  ref : string ;
  public patient : object;
  public frequence : object;
  private  seances : Array<object>;
  private  consultations : Array<object>;
  public dateDebut : Date;
  public etatPresci : object;
}
