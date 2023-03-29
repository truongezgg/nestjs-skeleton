import { initSwaggerForAPIAdmin } from '@app/swagger';
import { NestFactory } from '@nestjs/core';
import { ApiAdminModule } from './api-admin.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiAdminModule);
  initSwaggerForAPIAdmin(app);
  await app.listen(3001);
}
bootstrap();
