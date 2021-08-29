import { Todo } from '@cc/data';
import { Injectable } from '@nestjs/common';

const todos: Todo[] = [
  { message: 'Take out trash', done: true },
  { message: 'Continue', done: false },
];

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }
}
