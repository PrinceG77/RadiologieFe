import {Component, OnInit} from '@angular/core';
import {HistoriquePrescriptionService} from "../../../controller/service/historique-prescription.service";

@Component({
  selector: 'app-historique-prescription-list',
  templateUrl: './historique-prescription-list.component.html',
  styleUrls: ['./historique-prescription-list.component.css']
})
export class HistoriquePrescriptionListComponent implements OnInit{

  constructor(public historiquePrescriptionService : HistoriquePrescriptionService) {
  }
  ngOnInit(): void {
  }

}
