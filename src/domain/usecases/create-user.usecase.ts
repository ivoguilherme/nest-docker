import UserGateway from '../gateways/user.gateway';
import { User } from '../entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserGateway') private readonly userRepository: UserGateway,
  ) {}

  async execute(user: Omit<User, 'id'>): Promise<User> {
    try {
      return await this.userRepository.create({
        ...user,
        id: v4(),
      });
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
