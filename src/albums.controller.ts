import { Controller, Get, Inject, Optional } from "@nestjs/common";
import { UserStore } from "./users.store";
@Controller('/users')

export class AlbumsController {
    constructor(private store: UserStore) {

    }
}
