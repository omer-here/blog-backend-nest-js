import { Controller, Get, Param, Query, Post, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe, Req, Patch, Put, Delete } from '@nestjs/common';

import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { UsersService } from './users.service';
import { ApiQuery, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

//http://localhost:3000/users
//nest generate controller users --np-spec can generate the controller and can add it to the module

@Controller('users')
@ApiTags('Users')
export class UserController {

    constructor(
        //injecting users service
        private readonly usersService : UsersService, 
        
        // You do not need to instantiate the user service class.
        // That would automatically be done by Nestjs.
    ){}

    //mandatory params should be listed first then optional ones: /:id/:optional?
    @Get('/:id')
    @ApiOperation({
        summary: 'Fetches a list of registered users on the application.'
      })
      @ApiResponse({
        status: 200,
        description: 'Users fetched successfully based on the query',
      })
    @ApiQuery({
        name:'limit',
        type:'number',
        required: false,
        description: "The number of entries returned per query",
        example: 10
    })
    @ApiQuery({
        name:'page',
        type:'number',
        required: false,
        description: "The position of page number which you want",
        example: 1
    })
    // public getUsers(@Param('id', ParseIntPipe) params: number | undefined, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit : number){ 
    // //you cannot validate a optional param
        // public getUsers(@Param() params: any, @Query() query: any){
        public getUsers( @Param() getUserParamDto: GetUsersParamDto){
        // console.log(params);
        // console.log(typeof params); //number
        // console.log(limit);
        return "You sent a get req";
    }

    @Post()
    // public createUsers(@Body(new ValidationPipe()) request: CreateUserDto, @Headers() headers:any, @Ip() ip: any){
    //     public createUsers(@Body() request: CreateUserDto, @Headers() headers:any, @Ip() ip: any){
    // //    public createUsers(@Body() request: any, @Headers() headers:any, @Ip() ip: any){    
    //     // console.log(request);
    //     // console.log(headers);
    //     // console.log(ip);
    //     return "You sent a post req";
    // }
    public createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    //this is actual req object from the express
    // public createUsers(@Req() request: Request){
    //     // console.log(request);
    //     return "You sent a post req";
    // }

    // @Put()
    // public createUsers(){
    //     return "You sent a Put req"
    // }

    // @Patch()
    // public createUsers(){
    //     return "You sent a Patch req"
    // }

    // @Delete()
    // public createUsers(){
    //     return "You sent a Delete req"
    // }
}