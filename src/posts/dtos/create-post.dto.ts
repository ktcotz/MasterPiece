import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
  SERIES = 'series',
}

export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  REVIEW = 'review',
  PUBLISHED = 'published',
}

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    description: 'Title of post',
    example: 'Create own NestJS API!',
  })
  title: string;

  @IsEnum(PostType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Type of post',
    example: PostType.POST,
  })
  postType: PostType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only - without spaces.',
  })
  @ApiProperty({
    description: 'Slug of title post',
    example: 'create-own-nestjs-api',
  })
  slug: string;

  @IsNotEmpty()
  @IsEnum(PostStatus)
  @ApiProperty({
    description: 'Status of post',
    example: PostStatus.PUBLISHED,
  })
  status: PostStatus;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Content of title',
    example: 'Created by ktcotz',
  })
  content?: string;

  @IsJSON()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Schema of post',
    example: 'Schema',
  })
  schema?: string;

  @IsUrl()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'URL image',
    example: 'http://localhost:3000/image',
  })
  featuredImageUrl?: string;

  @IsISO8601()
  @ApiProperty({
    description: 'Post date created',
    example: new Date().toISOString(),
  })
  publishOn: Date;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  @ApiPropertyOptional({
    description: 'Post tags',
    example: ['post', 'api', 'nestjs'],
  })
  tags?: string[];

  metaOptions: { key: string; value: boolean }[];
}
