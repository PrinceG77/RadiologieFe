import {Component, OnInit} from '@angular/core';
import {PrescriptionService} from "../../../controller/service/prescription.service";
import {SeanceService} from "../../../controller/service/seance.service";
import {Seance} from "../../../controller/model/seance.model";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit{
  constructor(private seanceService : SeanceService) {
  }

  ngOnInit(): void {
    //this.findAll();
  }

  public findAll() : void
  {
    this.seanceService.findAll().subscribe(data => this.seances = data);
  }
/*
  public findByPrescriptionRef(ref: string) : void {
    this.seanceService.findByPresccriptionRef(ref).subscribe(data => this.seances = data);

  }*/

  get seances(): Array<Seance> {

    return this.seanceService.seances;
  }

  set seances(value: Array<Seance>) {
    this.seanceService.seances = value;
  }

}
