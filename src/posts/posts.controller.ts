import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':userID?')
  getPosts(@Param('userID') userID: string) {
    return this.postsService.findAll(userID);
  }
}
