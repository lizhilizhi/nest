import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Cron} from "@nestjs/schedule";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  @Cron('45 * * * * *')
  hacron() {
    console.log('---执行一次----')
  }
}
