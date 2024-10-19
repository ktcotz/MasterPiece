import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomSwaggerModule } from './swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  CustomSwaggerModule.setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
