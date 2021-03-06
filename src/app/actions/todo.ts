import {Action} from '@ngrx/store';
import {Todo} from '../models/todo';

export const ADD_TODO = '[Todo] add';
export const REMOVE_TODO = '[Todo] remove';
export const TOGGLE_TODO = '[Todo] toggle';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: Todo) {}
}


export type Actions = AddTodo | RemoveTodo | ToggleTodo;
