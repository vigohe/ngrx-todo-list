import {Todo} from '../models/todo';
import {Actions, ADD_TODO, REMOVE_TODO} from '../actions/todo';

export interface State {
  entities: Todo[];
}

export const initialState: State = {
  entities: []
};

export function reducer(state: State = initialState, action: Actions ): State {
  switch (action.type) {
    case ADD_TODO:
      return {
        entities: [...state.entities, action.payload]
      };
    case REMOVE_TODO:
      return {
        entities: state.entities.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}

