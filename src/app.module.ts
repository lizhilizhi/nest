import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {ScheduleModule} from "@nestjs/schedule";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

@Module({
  imports: [UserModule, ScheduleModule.forRoot(),TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'lizhi1234',
        database: 'text',
        entities: ['dist/**/*.entity{ .ts,.js}'],
        synchronize: true,}
  )],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule  {
  constructor(private dataSource: DataSource) {}
}
