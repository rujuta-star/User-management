import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  dateCreated: string;
  image?: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  user: User = { id: 0, firstName: '', lastName: '', role: '', status: '', dateCreated: '' };
  roles = ['Admin', 'Publisher', 'Reviewer', 'Moderator'];
  editing = false;
  displayDialog: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers(); // Fetch users from service
  }

  showAddDialog(): void {
    this.displayDialog = true;
    this.user = { id: 0, firstName: '', lastName: '', role: '', status: '', dateCreated: '' }; 
  }

  editUser(user: User): void {
    this.displayDialog = true; 
    this.user = { ...user }; // Pre-fill the form with the selected user's details
    this.editing = true; // Set editing flag to true
  }

  saveUser(): void {
    if (this.editing) {
      // Update existing user
      this.userService.updateUser(this.user.id, this.user);
    } else {
      // Add new user
      this.user.id = Date.now();
      this.user.dateCreated = new Date().toISOString();
      this.userService.addUser(this.user);
    }
    this.displayDialog = false; // Close the dialog
    this.editing = false; // Reset editing flag
    this.users = this.userService.getUsers(); // Update the user list in the dashboard
  }

  cancel(): void {
    this.displayDialog = false; // Close the dialog without saving
    this.editing = false; // Reset editing flag
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
