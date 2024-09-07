import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./dto";

let USERS = []

@Controller("/users")
export class UsersController {

    @Post()
    addUsers(@Body() createUserDTO: createUserDTO) {
        USERS.push(createUserDTO)
        return "user added"
    }

    @Get()
    getUsers() {
        return USERS
    }

    @Get(':id')
    getUser(@Param("id") id: number) {
        return USERS.find(user => +user.id === +id)
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updatedUserDTO: createUserDTO) {
        const userIdx = USERS.findIndex(user => +user.id === +id)


        if (!userIdx) {
            return "User Not Found"
        }

        USERS[userIdx] = updatedUserDTO
    }


    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        USERS = USERS.filter((user) => +user.id !== +id)
    }

}
