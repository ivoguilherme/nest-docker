import UserGateway from '../gateways/user.gateway';
import { User } from '../entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject('UserGateway') private readonly userRepository: UserGateway,
  ) {}

  async execute(email: string): Promise<User> {
    try {
      const userByEmail = await this.userRepository.getByEmail(email);
      return userByEmail;
    } catch (error) {
      throw error;
    }
  }
}
