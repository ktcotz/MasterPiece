import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':userID?')
  getPosts(@Param('userID') userID: string) {
    return this.postsService.findAll(userID);
  }

  @Post()
  createPost(@Body() createPostDTO: CreatePostDTO) {
    return this.postsService.createPost(createPostDTO);
  }
}
