import { ConflictException, Injectable } from '@nestjs/common';
import UserGateway from 'src/domain/gateways/user.gateway';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class UserRepository implements UserGateway {
  private users: Array<User> = [];

  create(user: User) {
    try {
      const userAlreadyExists = this.getByEmail(user.email);

      if (userAlreadyExists) {
        throw new ConflictException(
          'There is already a registered user with this email',
        );
      }

      this.users.push(user);
      return Promise.resolve(user);
    } catch (error) {
      throw error;
    }
  }

  getByEmail(email: string) {
    try {
      return Promise.resolve(this.users.find((user) => user.email === email));
    } catch (error) {
      throw error;
    }
  }

  getAll() {
    try {
      return Promise.resolve(this.users);
    } catch (error) {
      throw error;
    }
  }
}
