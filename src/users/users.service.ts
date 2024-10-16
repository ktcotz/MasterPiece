import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  users = [
    {
      firstName: 'Kamil',
      lastName: 'Jan',
      email: 'kam.nas21@wp.pl',
      password: 'adam123',
    },
  ];

  getUsers() {
    return {
      users: this.users,
    };
  }

  getUser(id: number) {
    const user = this.users[id];

    return {
      user,
    };
  }

  createUser(createUserDTO: CreateUserDTO) {
    const newUsers = [...this.users, createUserDTO];

    return {
      users: newUsers,
    };
  }
}
