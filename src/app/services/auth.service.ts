import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private fireauth: AngularFireAuth,
    private router: Router
  ) {}

  // User Registration
  registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, postData);
  }

  // Forgot Password
  forgotPassword(email: string): void {
    this.fireauth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigate(['/verify-email']);
      })
      .catch((error: Error) => {
        console.error('Error sending password reset email:', error);
      });
  }

  // Get User Details
  getUserDetails(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users?email=${email}&password=${password}`
    );
  }
}
