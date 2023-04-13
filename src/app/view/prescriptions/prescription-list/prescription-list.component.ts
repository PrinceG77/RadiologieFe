import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../controller/service/prescription.service";
import {Prescription} from "../../../controller/model/prescription.model";
import {Seance} from "../../../controller/model/seance.model";
import {SeanceService} from "../../../controller/service/seance.service";
import {Router} from "@angular/router";
import {HistoriquePrescriptionService} from "../../../controller/service/historique-prescription.service";


@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit{

  constructor(private prescriptionService : PrescriptionService, public seanceService : SeanceService, private router : Router,
              private historiqueService : HistoriquePrescriptionService) {
  }

  ngOnInit(): void {
    this.findAll();

  }

  public findAll() : void
  {
    this.prescriptionService.findAll().subscribe(data => this.prescriptions = data);
  }

  get prescriptions(): Array<Prescription> {
    return this.prescriptionService.prescriptions;
  }

  set prescriptions(value: Array<Prescription>) {
    this.prescriptionService.prescriptions = value;
  }

  public deleteByRef(prescription : Prescription, index : number) : void {
    let confirmation = confirm("Êtes-vous certain de vouloir supprimer cette prescription ?");
    if(!confirmation) return;

    this.prescriptionService.deleteByRef(prescription.ref).subscribe(data => {
      if(data > 0 ){
        this.prescriptions.splice(index, 1);
        alert("ELEMENT SUPPRIME AVEC SUCCES !!");
      }
      else{
        alert("Erreur :: Impossible de supprimer cet élément!!");
      }
    });
  }
 seances : Array<Seance>;
  public update(index : number, prescrciption : Prescription) : void{
    this.prescriptionService.update(index, prescrciption);
  }

  public findByPrescriptionRef(ref: string) {
    this.prescriptionService.findByPrescriptionRef(ref).subscribe(data => this.seanceService.seances = data );
  }

  public findHistoriqueByPrescriptionRef(ref: string) {
    this.historiqueService.findByPresccriptionRef(ref).subscribe(
      data=> this.historiqueService.historiquePrescriptions = data);

    this.router.navigateByUrl("/historique-prescription");
  }
}


