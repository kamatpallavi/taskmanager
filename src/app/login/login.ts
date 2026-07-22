import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authService: AuthService,private router: Router) { }

  email = '';
  password = '';

  /*login()
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

  }*/
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

        next: (response: any) =>
        {
            alert(response.message);

            localStorage.setItem('userId', response.userId);
            this.router.navigate(['/add-task']);
        },

        error: (error) =>
        {
            alert(error.error);
        }

    });

}

}