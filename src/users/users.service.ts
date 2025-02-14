import { forwardRef, Inject } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

/**
 * Class to connect to Users table and perform business operations
 */

//this file contains the actual logic like controllers in the express
@Injectable() // the moment you assign an injectable decorator to this particular class, this now becomes a valid
export class UsersService{
    constructor(
        //injecting Auth Service
        @Inject(forwardRef(()=> AuthService))
        private readonly authService: AuthService,

        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    public async createUser(createUserDto: CreateUserDto) {
        // Check if user with email exists
        const existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
        });
    
        /**
         * Handle exceptions if user exists later
         * */
    
        // Try to create a new user
        // - Handle Exceptions Later
        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);
    
        // Create the user
        return newUser;
    }

    /**
   * Public method responsible for handling GET request for '/users' endpoint
   */
    public findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
    ) {
    return [
    {
        firstName: 'John',
        email: 'john@doe.com',
    },
    {
        firstName: 'Alice',
        email: 'alice@doe.com',
    },
    ];
    }


    /**
     * The method to get a user by id
     */

    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com',
        };
    }
}