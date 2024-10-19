import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { CustomSwaggerModule } from './swagger/swagger.module';

@Module({
  imports: [UsersModule, PostsModule, AuthModule, CustomSwaggerModule],
})
export class AppModule {}
