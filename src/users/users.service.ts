import { forwardRef, HttpException, HttpStatus, Inject, RequestTimeoutException } from '@nestjs/common';
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
        let existingUser: User | undefined | null = undefined;

        try {
            // Check if user with email exists
            existingUser = await this.usersRepository.findOne({
                where: { email: createUserDto.email },
            });
            } catch (error) {
            // Might want to save these errors with more information in a log file or database
            // You don't need to send this sensitive information to user
            throw new RequestTimeoutException(
                'Unable to process your request at the moment please try later',
                {
                description: 'Error connecting to database',
                },
            );
            }
        
            /**
             * Handle exceptions if user exists later
             * */
            if (existingUser) {
            throw new BadRequestException(
                'The user already exists, please check your email',
            );
            }
        
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
            let loggenIn = false;
            if (!loggenIn) {
            throw new HttpException(
                {
                status: HttpStatus.MOVED_PERMANENTLY,
                error: `The API endpoint doesn't exist anymore`,
                fileName: 'users.service.ts',
                lineNumber: 103,
                },
                HttpStatus.MOVED_PERMANENTLY,
                {
                cause: new Error(),
                description:
                    'Occured because the API endpoint was permanently moved to a new location',
                },
            );
            }
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