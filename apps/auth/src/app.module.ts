import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
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
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
