import {Injectable, CanActivate, ExecutionContext,} from '@nestjs/common';
import {Reflector} from "@nestjs/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.get<string[]>('roles',context.getHandler)
    console.log('-----------执行守卫-------------')

    return true

    }
}