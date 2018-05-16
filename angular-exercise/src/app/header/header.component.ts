import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `

  <div class="row">
    <div class="col-md-9"> 
      <h1>Hi {{currentUser.username}}!</h1> 
    </div>
    <div class="logout pull-right">
        <a (click) ="logout()" [routerLink]="['/login']" >
          <span class="glyphicon glyphicon-log-out"></span> Logout
        </a>
    </div>
  </div>
  `,
  styles: [` .logout { margin-top:35px; margin-right:12px }`]
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private loginService : LoginService,  private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    this.loginService.logout();
  }

  ngOnInit() {
  }

}
