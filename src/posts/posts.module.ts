import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';


@Module({
  //here you see, I imported the whole module instead of importing a single service for inter-dependency injection
  imports: [UsersModule, TypeOrmModule.forFeature([Post])], //forFeature is responsible for autoloading entities
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule{}