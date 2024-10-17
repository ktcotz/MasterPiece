import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, PatchUserDTO, UserQueryDTO } from './dto/users.dto';

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
    @Query() { limit, page }: UserQueryDTO,
  ) {

    return this.usersService.getUser(id,limit,page);
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }

  @Patch()
  patchUser(@Body() patchUserDTO: PatchUserDTO) {
    return patchUserDTO;
  }
}
