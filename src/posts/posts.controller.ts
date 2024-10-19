import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':userID?')
  getPosts(@Param('userID') userID: string) {
    return this.postsService.findAll(userID);
  }
}
