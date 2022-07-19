import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { options } from './config/swg.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
