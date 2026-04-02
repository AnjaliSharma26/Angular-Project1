import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user = {
    name: '',
    email: ''
  };

  constructor(private router: Router) { }

  login() {
    const existingUsers = localStorage.getItem('users');

    let users = [];

    if (existingUsers) {
      users = JSON.parse(existingUsers);
    }

    users.push(this.user); // add new user

    localStorage.setItem('users', JSON.stringify(users)); //save array

    this.router.navigate(['/dashboard']);
  }
}