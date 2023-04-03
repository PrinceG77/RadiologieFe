import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "src/app/controller/service/prescription.service";
import {Prescription} from "../../../controller/model/prescription.model";

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.css']
})
export class PrescriptionCreateComponent implements OnInit{

  constructor(private prescriptionService : PrescriptionService) {
  }
  ngOnInit(): void {
  }

  public save() : void{
    this.prescriptionService.save().subscribe(data => {
      if (data != null) {
        this.prescriptionService.prescription = null;
        alert('SAVE SUCCES !');

      } else {
        alert('SAVE ERROR :: REF EXISTS');
      }
    });
  }



  get prescription(): Prescription {

    return this.prescriptionService.prescription;
  }

  set prescription(value: Prescription) {
    this.prescriptionService.prescription = value;
  }

  get prescriptions(): Array<Prescription> {

    return this.prescriptionService.prescriptions;
  }

  set prescriptions(value: Array<Prescription>) {
    this.prescriptionService.prescriptions = value;
  }

}
