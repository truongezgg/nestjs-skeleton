import { initSwaggerForAPI } from '@app/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwaggerForAPI(app);
  await app.listen(3000);
}
bootstrap();
