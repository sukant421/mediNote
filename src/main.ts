import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { validateEnv } from './config';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  validateEnv();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalPipes(new ValidationPipe(
    { whitelist: true, forbidNonWhitelisted: true }
  ));

  app.setGlobalPrefix('api');

  const configService = new ConfigService();
  const port = configService.get<number>('PORT') || 8000;

  console.log('🚀 Starting server...');
  await app.listen(port, '0.0.0.0');
  console.log(`✅ App is running on port ${port}`);
}

bootstrap();
