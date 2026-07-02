import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authService: AuthService) { }

  email = '';
  password = '';

  login()
  {
    console.log(this.email);
    console.log(this.password);

    const user =
    {
      email: this.email,
      password: this.password
    };

    this.authService.login(user).subscribe({
      next: (response) =>
      {
        alert(response);
      },

      error: (error) =>
      {
        alert(error.error);
      }
    });

  }

}