import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [UsersModule], //here you see, I imported the whole module instead of importing a single service for inter-dependency injection
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule{}