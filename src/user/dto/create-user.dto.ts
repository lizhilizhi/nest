import { ApiProperty } from "@nestjs/swagger";
import { options } from "../../common/config/swg.config";

export class CreateUserDto {
  @ApiProperty({default:'wuwuqianqian'})
  name:string;
  @ApiProperty({description:'nianling',default:'11'})
  age:number;
}
