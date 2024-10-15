import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  users = [
    {
      name: 'Kamil',
      age: 23,
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
