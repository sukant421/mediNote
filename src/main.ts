import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { validateEnv } from './config';

async function bootstrap() {
  validateEnv();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = Number(process.env.PORT) || 8080;

  console.log('🚀 Starting server...');
  await app.listen(port, '0.0.0.0');
  console.log(`✅ App is running on port ${port}`);
}

bootstrap();
