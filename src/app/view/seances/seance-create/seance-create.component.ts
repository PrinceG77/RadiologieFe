import {Component, OnInit} from '@angular/core';
import {Seance} from "../../../controller/model/seance.model";
import {SeanceService} from "../../../controller/service/seance.service";

@Component({
  selector: 'app-seance-create',
  templateUrl: './seance-create.component.html',
  styleUrls: ['./seance-create.component.css']
})
export class SeanceCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private seanceService : SeanceService) {
  }

  get seance(): Seance {

    return this.seanceService.seance;
  }

  set seance(value: Seance) {
    this.seanceService.seance = value;
  }

  get seances(): Array<Seance> {

    return this.seanceService.seances;
  }

  set seances(value: Array<Seance>) {
    this.seanceService.seances = value;
  }


  public findAll() {
    return this.seanceService.findAll();
  }
}
