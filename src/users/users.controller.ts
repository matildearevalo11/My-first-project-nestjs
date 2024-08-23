import { Body, Controller, Get, HttpCode, Post  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('users')
export class UsersController {

    constructor(private usersService: UsersService){}
    

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    } 

    @Post()
    @HttpCode(201)
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user);
    }
}
