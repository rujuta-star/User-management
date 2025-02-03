import { Injectable } from '@angular/core';
import { User } from './user.component';
  
@Injectable({
  providedIn: 'root', 
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      status: 'Active',
      role: 'User',
      dateCreated: '1/2/25',
      image: 'assets/images/user1.png', // Path to user's image
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      status: 'Inactive',
      role: 'Admin',
      dateCreated: '2/2/25',
      image: 'assets/images/user2.jpeg', // Path to user's image
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      status: 'Active',
      role: 'Publisher',
      dateCreated:'3/2/25',
      image: 'assets/images/user4.png', // Path to user's image
    },
    {
      id: 1,
      firstName: 'Nick',
      lastName: 'Doe',
      status: 'Active',
      role: 'Reviewer',
      dateCreated: '4/2/25',
      image: 'assets/images/user5.jpeg', // Path to user's image
    },
    {
      id: 2,
      firstName: 'Rozi',
      lastName: 'Smith',
      status: 'Inactive',
      role: 'Moderator ',
      dateCreated: '5/2/25',
      image: 'assets/images/user6.jpeg', // Path to user's image
    },
    {
      id: 3,
      firstName: 'Micheal',
      lastName: 'Johnson',
      status: 'Active',
      role: 'User',
      dateCreated:'6/2/25',
      image: 'assets/images/user7.jpeg', // Path to user's image
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Connor',
      status: 'Suspended',
      role: 'Admin',
      dateCreated: '5/7/23',
      image: 'assets/images/user8.jpeg', // Path to user's image
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      status: 'Active',
      role: 'User',
      dateCreated: '2/3/24',
      image: 'assets/images/user9.png', // Path to user's image
    },
    {
      id: 6,
      firstName: 'Emma',
      lastName: 'Davis',
      status: 'Inactive',
      role: 'User',
      dateCreated: '3/5/24',
      image: 'assets/images/user10.jpeg', // Path to user's image
    },
    {
      id: 7,
      firstName: 'Oliver',
      lastName: 'Brown',
      status: 'Active',
      role: 'User',
      dateCreated: '6/8/23',
      image: 'assets/images/user11.jpeg', // Path to user's image
    },
   
    
    
  ];
  

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: any) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
