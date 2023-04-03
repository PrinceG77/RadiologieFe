import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../controller/service/prescription.service";
import {Prescription} from "../../../controller/model/prescription.model";

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit{

  constructor(private prescriptionService : PrescriptionService) {
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
}
