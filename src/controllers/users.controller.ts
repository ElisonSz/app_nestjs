import { Controller, Get, Param } from '@nestjs/common';

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
  getUserByid(@Param('id') id: number): any {
    const oneUser = this.users.filter((user) => user.id == id);
    return oneUser;
  }
}
