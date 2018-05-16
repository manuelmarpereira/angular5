import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="col-md-6 col-md-offset-3">
      <legend class="legend">Login</legend>
      <p><label>Username </label></p>
      <p><input type="text"  name="username"  [(ngModel)]="userModel.username" #username="ngModel" /></p>
      <p><label>Password </label></p>
      <p><input type="password" name="password"  [(ngModel)]="userModel.password" #password="ngModel" /></p>
      <p><button class="btn btn-primary" (click)="login()">Login</button>
  </div>

  `,
  styles: [`.legend{margin-top:150px}`]
})
export class LoginComponent implements OnInit {

  userModel: User ={username: "", password: "", firstName: "", LastName: ""};

  constructor( private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if (this.userModel.username && this.userModel.password){
      const currentUser : User = this.loginService.login(this.userModel.username, this.userModel.password)
      this.router.navigate(['/home']);
    }else{
      alert("Please insert an username and password")
    }
}

}
