import { reducer } from './todos';
import { storeLogger } from 'ngrx-store-logger';
import { ActionReducerMap, ActionReducer, MetaReducer  } from '@ngrx/store';
import * as fromTodo from './todos';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};

function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<any>[] = environment.production ?[] : [logger, storeFreeze];
