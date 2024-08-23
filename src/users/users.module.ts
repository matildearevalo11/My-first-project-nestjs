 import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: '/users', method: RequestMethod.GET },
        {
          path: '/users',
          method: RequestMethod.POST,
        },
      )
      .apply(AuthMiddleware)
      .forRoutes('users');
  }
}