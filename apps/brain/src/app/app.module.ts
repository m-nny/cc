import { AuthModule } from '@cc/auth';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
