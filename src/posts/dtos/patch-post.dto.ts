import { CreatePostDTO } from './create-post.dto';
import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class PatchPostDTO extends PartialType(CreatePostDTO) {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'The ID of the post that needs to be updated.',
  })
  id: number;
}
