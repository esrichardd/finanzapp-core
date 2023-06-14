import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { StatusModule } from '@libs/healthcheck/status/status.module';
import { LoggerModule } from '@libs/logger';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from 'libs/persistence';
import dbConfig from 'libs/persistence/db-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/users/.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    StatusModule,
    LoggerModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
