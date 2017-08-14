import {ActionReducerMap} from '@ngrx/store';
import * as fromTodo from './todos';

export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};
