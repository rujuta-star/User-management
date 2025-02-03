import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]

})
export class LoginComponent {
  // Login fields
  username: string = '';
  password: string = '';

  // Register fields
  firstName: string = '';
  lastName: string = '';
  newUsername: string = '';
  email: string = '';
  description: string = '';
  newPassword: string = '';
  registrationMessage: string | null = null;
  registeredUsers: { username: string, password: string, firstName: string, lastName: string, description: string }[] = [];
  isRegistering: boolean = false;

  constructor(private router: Router) { }
  setRegistrationMessage(message: string) {
    this.registrationMessage = message;
  }
  toggleRegister() {
    this.isRegistering = true;
    document.querySelector('.container')?.classList.add('register-mode');
  }

  toggleLogin() {
    this.isRegistering = false;
    document.querySelector('.container')?.classList.remove('register-mode');
  }

 // In LoginComponent
onRegister() {
  if (this.firstName && this.lastName && this.newUsername && this.description && this.newPassword) {
    // Retrieve existing users from localStorage
    const users = localStorage.getItem('registeredUsers');
    this.registeredUsers = users ? JSON.parse(users) : [];

    // Check if the username already exists
    const existingUser = this.registeredUsers.find(u => u.username === this.newUsername);
    if (!existingUser) {
      // Add the new user to the array
      const newUser = {
        username: this.newUsername,
        password: this.newPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description
      };
      this.registeredUsers.push(newUser);

      // Save the updated array to localStorage
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

      this.registrationMessage = 'Registration successful!';
     
      // Clear form fields
      this.newUsername = '';
      this.newPassword = '';
      this.firstName = '';
      this.lastName = '';
      this.description = '';

      // Switch to login form after registration
      this.toggleLogin();
    } else {
      alert('Username already exists!');
    }
  } else {
    alert('Please fill in all fields.');
  }
}


  // In LoginComponent
onLogin() {
  // Retrieve existing users from localStorage
  const users = localStorage.getItem('registeredUsers');
  this.registeredUsers = users ? JSON.parse(users) : [];

  // Check if the username and password match
  const user = this.registeredUsers.find(u => u.username === this.username && u.password === this.password);
  if (user) {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid credentials');
  }
}

  // forgotPassword() {
  //   const username = prompt('Please enter your username to reset the password:');

  //   if (username) {
  //     const user = this.registeredUsers.find(u => u.username === username);
  //     if (user) {
  //       const newPassword = prompt('Enter your new password:');
  //       if (newPassword) {
  //         user.password = newPassword;
  //         alert('Password reset successfully!');
  //       } else {
  //         alert('Password reset canceled.');
  //       }
  //     } else {
  //       alert('User not found!');
  //     }
  //   } else {
  //     alert('Username is required to reset the password.');
  //   }
  // }
  forgotPassword() {
    this.router.navigate(['/forgot-password']); // Navigates to the Forgot Password page
  }
  

  switchMode(mode: string) {
    const container = document.querySelector('.container');
    if (mode === 'register') {
      container?.classList.add('register-mode');
    } else {
      container?.classList.remove('register-mode');
    }
  }
}
