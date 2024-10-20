import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreatePostDTO } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  findAll(userID: string) {
    const user = this.usersService.getUser(Number(userID), 1, 10);

    if (!user) return [];

    return [
      {
        title: 'Test Title!',
        content: 'User ID content!',
      },
      {
        title: 'Test Title 2!',
        content: 'User ID content 2!',
      },
    ];
  }

  createPost(createPostDTO: CreatePostDTO) {
    return createPostDTO;
  }
}
