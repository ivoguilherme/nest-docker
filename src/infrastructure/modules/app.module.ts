import { Module } from '@nestjs/common';
import { EntrypointModule } from './entrypoint.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), EntrypointModule],
})
export class AppModule {}
