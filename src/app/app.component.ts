import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./controller/service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Radiologie';

  constructor(private authService : AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.loadAuthenticatedUserFromLocalStorage();
  }
}
