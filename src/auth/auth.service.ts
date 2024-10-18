import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  login(email: string, password: string, id: string) {
    const user = this.usersService.getUser(Number(id), 1, 10);

    return 'SAMPLE_TOKEN';
  }

  isAuth() {
    return true;
  }
}
