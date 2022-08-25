import { Injectable } from '@nestjs/common';
import {Cron} from "@nestjs/schedule";

@Injectable()
export class UserService {



  @Cron('45 * * * * *')
  expCron() {
    console.log('---执行一次----')
  }
}
