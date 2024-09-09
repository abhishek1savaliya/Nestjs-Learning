import { Controller, Get, Inject, Optional } from "@nestjs/common";
import { UserStore } from "./users.store";
@Controller('/users')
export class UsersController {
    constructor(private store: UserStore) {
        console.log('Constructor Init')
    }

    @Get()
    getUsers() {
        return 'Route Called'
    }

}
