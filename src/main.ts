import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3001;
  console.log("listening on port ", port)
  await app.listen(port);
}
bootstrap();
