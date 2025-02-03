import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = {};
  displayDialog: boolean = false;
  dialogHeader: string = '';
  roles = ['Admin','User', 'Publisher', 'Reviewer', 'Moderator'];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getUsers();
  }
  

  openAddUserDialog(): void {
    this.dialogHeader = 'Add New User';
    this.selectedUser = { firstName: '', lastName: '', role: '', status: '',image: null,
      dateCreated: new Date(), };
    this.displayDialog = true;
  }

  editUser(user: any): void {
    this.dialogHeader = 'Edit User';
    this.selectedUser = { ...user };
    this.displayDialog = true;
  }

  saveUser(): void {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser);
    } else {
      this.selectedUser.id = Date.now();
      this.userService.addUser(this.selectedUser);
    }
    this.displayDialog = false;
    this.loadUsers();
  }
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedUser.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
 
  
  
  cancel(): void {
    this.displayDialog = false;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.loadUsers();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
