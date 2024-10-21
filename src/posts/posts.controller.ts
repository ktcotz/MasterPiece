import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post.dto';
import { PatchPostDTO } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':userID?')
  getPosts(@Param('userID') userID: string) {
    return this.postsService.findAll(userID);
  }

  @Post()
  @ApiOkResponse({
    description: 'Successful response',
    example: {
      title: 'Hello post!',
      postType: 'post',
      slug: 'hello-post',
      status: 'published',
    },
  })
  @ApiOperation({
    description: 'Create post',
    summary: 'Create post',
  })
  createPost(@Body() createPostDTO: CreatePostDTO) {
    return this.postsService.createPost(createPostDTO);
  }

  @Patch()
  updatePost(@Body() patchPostsDTO: PatchPostDTO) {
    console.log(patchPostsDTO);
  }
}
