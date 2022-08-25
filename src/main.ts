import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { options } from './common/config/swg.config';
import {AuthGuard} from "./common/auth/auth.guard";
import {Reflector} from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new AuthGuard(new Reflector()))
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
