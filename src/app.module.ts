import { Module, Inject, Injectable } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './users.store';
import { AlbumsController } from './albums.controller';


@Module({
  controllers: [UsersController, AlbumsController],
  providers: [UserStore]
})
export class AppModule { }
