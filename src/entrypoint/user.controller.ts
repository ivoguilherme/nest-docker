import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from '../repositories/rest/dto/create-user.dto';
import { CreateUserUseCase } from 'src/domain/usecases/create-user.usecase';
import { GetAllUsersUseCase } from 'src/domain/usecases/get-all-users.usecase';
import { GetUserByEmailUseCase } from 'src/domain/usecases/get-user-by-email.usecase';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getUserByEmailUseCase: GetUserByEmailUseCase,
  ) {}

  @Get(':email')
  getByEmail(@Param('email') email: string) {
    return this.getUserByEmailUseCase.execute(email);
  }

  @Get()
  getAll() {
    return this.getAllUsersUseCase.execute();
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.createUserUseCase.execute(user);
  }
}
