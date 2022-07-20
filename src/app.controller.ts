import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from "@nestjs/swagger";
@ApiTags('配置接口模块')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
