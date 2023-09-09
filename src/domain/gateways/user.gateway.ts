import { User } from '../entities/user.entity';

export default interface UserGateway {
  create(user: User): Promise<User>;
  getByEmail(email: string): Promise<User>;
  getAll(): Promise<User[]>;
}
