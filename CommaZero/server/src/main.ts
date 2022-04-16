import { SupertokensExceptionFilter } from './auth/auth.filter';
import { NestFactory } from '@nestjs/core';
// ...
import supertokens from 'supertokens-node';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  app.useGlobalFilters(new SupertokensExceptionFilter());

  await app.listen(5555);
}

bootstrap();
