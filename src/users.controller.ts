import { Controller, Put, Req, HttpCode, Get, Headers, Query } from "@nestjs/common";
import { of } from 'rxjs';
import { query, Request, Response } from "express";

interface QueyParams {
    age: number;
    name: string;
}
@Controller("/users")
export class UsersController {

    @Get('/videos')
    getVideos(@Headers('user-agent') headers: string) {
        console.log(headers)
        return 'success'
    }
}
