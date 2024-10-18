import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  users = [
    {
      firstName: 'Kamil',
      lastName: 'Jan',
      email: 'kam.nas21@wp.pl',
      password: 'adam123',
    },
  ];

  getUsers() {
    const isAuth = this.authService.isAuth();

    return {
      users: this.users,
    };
  }

  getUser(id: number, limit: number, page: number) {
    const user = this.users[id];

    if (!user) return null;

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
