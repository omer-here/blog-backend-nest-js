import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        //injecting Posts Service
        private readonly postService: PostsService, 
    ){}

    @Get('/:userId')
    public getPosts(@Param('userId') userId: string) {
      return this.postService.findAll(userId);
    }

    @ApiOperation({
        summary: 'Creates a new post for the blog.',
    })
    @ApiResponse({
        status: 201,
        description:
        'You get a success 201 response if the post is created successfully',
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
      }
    

    @ApiOperation({
        summary: 'Updates and existing blog post in the database.',
    })
    @ApiResponse({
        status: 200,
        description:
        'You get a success 20o response if the post is updated successfully',
    })
    @Patch()
    public updatePost(@Body() patchPostsDto: PatchPostDto) {
        // console.log(patchPostsDto);
    }

}
