import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { StatusModule } from '@libs/healthcheck/status/status.module';
import { LoggerModule } from '@libs/logger';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    StatusModule,
    LoggerModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
