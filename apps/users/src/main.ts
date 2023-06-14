import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from '@libs/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const logger = new LoggerService();
  logger.log(`users API is running on port ${port}`, 'users');
  app.setGlobalPrefix('users');
  await app.listen(port);
}
bootstrap();
