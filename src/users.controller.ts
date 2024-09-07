import { Controller, Put, Req, HttpCode, Get, HttpStatus, Res, Header, Post, Redirect } from "@nestjs/common";
import { of } from 'rxjs';
import { Request, Response } from "express";

@Controller("/users")
export class UsersController {

    @Post("/profile")
    @Redirect("/users/account")
    @Header('Cache-Control', 'none')
    @Header('X-Name', 'Abhishek')
    @HttpCode(HttpStatus.NO_CONTENT)
    getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {

        res.status(200);
        return of({
            hello: "world"
        })
    }

    @Get('/account') 
    redirectRoute(){
        return 'Working Account'
    }
}
