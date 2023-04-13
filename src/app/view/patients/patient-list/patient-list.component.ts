import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../controller/service/patient.service";
import {Patient} from "../../../controller/model/patient.model";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }

  constructor(private patientService : PatientService) {
  }

  public findAll() : void {
    this.patientService.findAll().subscribe(data => this.patients = data);
  }

  get patients(): Array<Patient> {

    return this.patientService.patients;
  }

  set patients(value: Array<Patient>) {
    this.patientService.patients = value;
  }

  public deleteByCin(patient : Patient, index : number) : void{

    let confirmation = confirm("Êtes-vous certain de vouloir supprimer ce patient ?");
    if(!confirmation) return;
    this.patientService.deleteByCin(patient.cin).subscribe(data => {
      if(data > 0 ){
        alert("Patient supprimé avec succès !");
        this.patients.splice(index, 1);
      }
      else {
        alert("Erreur : Impossible de supprimer cet élément !");
      }
    })
  }

  public update(i: number, patient: Patient) : void {
    this.patientService.update(i, patient);

  }
}
