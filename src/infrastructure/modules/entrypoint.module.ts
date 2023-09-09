import { Module } from '@nestjs/common';
import { UseCaseModule } from './usecase.module';
import { UserController } from 'src/entrypoint/user.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [UserController],
  providers: [
    /* Mappers */
  ],
  exports: [
    /* Mappers */
  ],
})
export class EntrypointModule {}
