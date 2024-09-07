import { Controller, Put, Req, HttpCode, Get, HttpStatus, Res, Header, Post, Redirect, Param } from "@nestjs/common";
import { of } from 'rxjs';
import { Request, Response } from "express";

interface videoParams {
    id: number;
    name: string;
}
@Controller("/users")
export class UsersController {

    @Get('/videos/:id/:name')
    getVideos(@Param() params: videoParams) {
        console.log(params)
        return 'success'
    }
}
