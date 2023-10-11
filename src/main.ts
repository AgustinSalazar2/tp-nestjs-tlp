import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const puerto: number = 3000;
  await app.listen(puerto, () =>
    console.log(`Servidor corriendo en el puerto: ${puerto}`),
  );
}
bootstrap();
