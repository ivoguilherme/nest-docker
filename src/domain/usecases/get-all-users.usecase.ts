import UserGateway from '../gateways/user.gateway';
import { User } from '../entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @Inject('UserGateway') private readonly userRepository: UserGateway,
  ) {}

  async execute(): Promise<Array<User>> {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      console.error(error.message);
    }
  }
}
