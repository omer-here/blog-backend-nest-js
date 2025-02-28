import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        //Injecting Users Service
        private readonly usersService: UsersService,

      /**
       * Injecting postsRepository
       */
      @InjectRepository(Post)
      private readonly postsRepository: Repository<Post>,
  
      /**
        * Inject metaOptionsRepository
        */
      @InjectRepository(MetaOption)
      private readonly metaOptionsRepository: Repository<MetaOption>,
    ){}
  
    /**
      * Method to create a new post
      */
    public async create(createPostDto: CreatePostDto) {
      // Create the metaOptions first if they exist
      let metaOptions = createPostDto.metaOptions
        ? this.metaOptionsRepository.create(createPostDto.metaOptions)
        : null;
    
      if (metaOptions) {
        // Save the metaOptions if they exist
        await this.metaOptionsRepository.save(metaOptions);
      }
    
      // Create the post
      let post = this.postsRepository.create({
        ...createPostDto,
        metaOptions: metaOptions ? [metaOptions] : [], // Set metaOptions to an array if they exist, or empty array if null
      });

      // Ensure you're using save, not update
      return await this.postsRepository.save(post);
    }
    

    public async findAll(userId: string) {
    // find all posts
    let posts = await this.postsRepository.find({
      relations: {
        metaOptions: true,
      },
    });

    return posts;
    }

    public async delete (id: number){
      //Find the post
      //Deleting the post
      //Delete the meta options
      //Confirmation
    }

}
