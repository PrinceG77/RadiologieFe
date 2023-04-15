import { Component } from '@angular/core';
import {AuthenticationService} from "../../controller/service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public authService : AuthenticationService, private router : Router) {
  }

  public handleLogout() {

    let confirmation = confirm("Êtes-vous sûr de vouloir vous déconnecter ?");
    if(!confirmation) return;

    this.authService.logout().subscribe({
      next : (data)=>{
        this.router.navigateByUrl("/login");
      }
    })
  }
}
