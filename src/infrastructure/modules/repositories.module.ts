import { Module } from '@nestjs/common';
import { UserRepository } from 'src/repositories/rest/user.repository';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}
