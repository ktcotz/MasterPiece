import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  users = [];

  getUsers() {
    return {
      users: this.users,
    };
  }

  createUser(createUserDTO: CreateUserDTO) {
    const newUsers = [...this.users, createUserDTO];

    return {
      users: newUsers,
    };
  }
}
