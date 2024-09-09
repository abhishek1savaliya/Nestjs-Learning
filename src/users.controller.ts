import { Body, Controller, Delete, Get, Inject, Optional, Param, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./create-user.dto";
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() createUserDto: createUserDTO) {
        this.usersService.addUser(createUserDto)
        return { message: 'USER ADDED' }
    }

    @Get()
    findAllUsers() {
        return this.usersService.getUsers()
    }

    @Get(':id')
    findUser(@Param('id') id: number) {
        return this.usersService.getUser(+id)
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: createUserDTO) {
        this.usersService.updateUser(+id, updateUserDto)
        return { message: 'USER UPDATED' }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        this.usersService.deleteUser(+id)
        return { message: 'USER DELETED' }
    }

}
