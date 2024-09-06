import { Controller, Put, Req } from "@nestjs/common";
import { of } from 'rxjs';
import { Request } from "express";

@Controller("/albums")
export class AlbumsController {

    @Put("/")
    getProfile(@Req() req: Request) {

        return 'photo'
    }
}
