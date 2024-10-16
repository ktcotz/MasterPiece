import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/users.dto';
import { IUsersQuery } from './dto/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query() { limit = 10, page = 1 }: IUsersQuery,
  ) {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }
}
