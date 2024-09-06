import { Controller, Put, Req } from "@nestjs/common";
import { of } from 'rxjs';
import { Request } from "express";

@Controller("/users")
export class UsersController {

    @Put("/profile/:id")
    getProfile(@Req() req: Request) {

        console.log(req.params);

        return of({
            hello: "world"
        });
    }
}
