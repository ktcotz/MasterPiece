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
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GetUsersParamDTO } from './dto/get-users.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Return a specific user fetched by ID',
  })
  @ApiOkResponse({
    description: 'Correctly returned user',
    example: {
      id: 1234,
      name: 'Kamil',
      age: 20,
    },
  })
  @ApiNotFoundResponse({
    description: 'Not found user with that ID',
    example: {
      user: null,
    },
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned by queries.',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of page number in paginated API',
    example: 1,
  })
  getUser(
    @Param('id') param: GetUsersParamDTO,
    @Query() { limit, page }: UserQueryDTO,
  ) {
    return this.usersService.getUser(param.id, limit, page);
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
