import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }

    login(_username: string, _password: string):User {
      // add user to local storage to simulate log in
      let user:User={
        username : _username,
        password :_password,
        LastName:"",
        firstName:""
      }

      localStorage.setItem('currentUser', JSON.stringify(user));

      return user;
    }

    logout() {
        // remove user from local storage to simulate log out
        localStorage.removeItem('currentUser');
    }
}