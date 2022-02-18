import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
@Controller('users')
export class UsersController {
  users = [
    { id: 1, username: 'elisondev', nombre: 'elison', password: 'elisode' },
    {
      id: 2,
      username: 'anitamachuca',
      nombre: 'ivis',
      password: 'machucanita',
    },
    { id: 3, username: 'ange', nombre: 'angela', password: 'nefta' },
  ];
  @Get('all')
  getUsers(): any {
    return this.users;
  }

  @Get('/:id')
  getUserByid(@Res() res: Response, @Param('id') id: number): any {
    const oneUser = this.users.filter((user) => user.id == id);
    if (oneUser.length > 0) {
      res.status(HttpStatus.OK).json(oneUser);
    } else {
      res.status(HttpStatus.NOT_FOUND).json(oneUser);
    }
  }
  @Post()
  create(@Body() payload: any): any {
    const { username, password } = payload;
    return {
      username,
      password,
    };
  }

  @Put()
  update(@Body() payload: any): any {
    const { username, password, id } = payload;
    return {
      username,
      password,
      id,
    };
  }
}
