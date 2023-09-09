import { Module, Provider } from '@nestjs/common';
import { CreateUserUseCase } from 'src/domain/usecases/create-user.usecase';
import { UserRepository } from 'src/repositories/rest/user.repository';
import { RepositoriesModule } from './repositories.module';
import { GetAllUsersUseCase } from 'src/domain/usecases/get-all-users.usecase';
import { GetUserByEmailUseCase } from 'src/domain/usecases/get-user-by-email.usecase';

const useCases = [CreateUserUseCase, GetAllUsersUseCase, GetUserByEmailUseCase];

const gateways: Array<Provider> = [
  {
    provide: 'UserGateway',
    useExisting: UserRepository,
  },
];

@Module({
  imports: [RepositoriesModule],
  providers: [...useCases, ...gateways],
  exports: [...useCases, ...gateways],
})
export class UseCaseModule {}
