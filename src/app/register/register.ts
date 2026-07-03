import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})


export class Register {
  constructor( private authService: AuthService) { }

  name = '';

  email = '';

  password = '';

  register()
  {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);

    const user = {
      name: this.name,
      email: this.email,
      password: this.password 
    };
    this.authService.register(user).subscribe(
    response =>
    {
        alert("User Registered Successfully");
    }
);
  }

}
