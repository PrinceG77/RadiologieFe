import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../controller/service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup ! : FormGroup;
  errorMessage : string;
  constructor(private fb : FormBuilder, private authService : AuthenticationService,
              private router : Router) {

    this.userFormGroup = this.fb.group({
      "username" : this.fb.control(""),
      "password" : this.fb.control("")
    })
  }

  ngOnInit(): void {
  }

  public handleLogin() {

    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;

    this.authService.login(username, password).subscribe({
      next : (data)=>{
        this.authService.authenticateUser(data).subscribe({
          next : (data)=>{
            this.router.navigateByUrl("/user/homepage");
          },
          error : (err)=>{
            this.errorMessage = err;
          }
        })
      },
      error : (err)=>{
        this.errorMessage = err;
      }
    })
  }
}
