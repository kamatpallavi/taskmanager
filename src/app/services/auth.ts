import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: any)
{
    return this.http.post(
        "https://localhost:7144/api/Auth/register",
        user,
        { responseType: 'text' }
    );
}



  login(user: any)
{
    return this.http.post(
        "https://localhost:7144/api/Auth/login",
        user
        /*{ responseType: 'text' } */
    );
}




}