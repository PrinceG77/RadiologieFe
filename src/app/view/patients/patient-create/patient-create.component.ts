import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../controller/service/patient.service";
import {Patient} from "../../../controller/model/patient.model";

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private patientService : PatientService) {
  }

  public save() : void{
    this.patientService.save().subscribe(data => {
      if(data != null){
        this.patientService.patient = null;
      alert('Patient créé avec succès !');

    }
    else {
      alert('Impossible de créer un patient !');
    }});

  }


  get patient(): Patient {

    return this.patientService.patient;
  }

  set patient(value: Patient) {
    this.patientService.patient = value;
  }

}
