import {Todo} from '../models/todo';
import {Actions, ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/todo';

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
        entities: [...state.entities,
          {
            id: Date.now(),
            text: action.payload,
            complete: false
          }
        ]
      };
    case REMOVE_TODO:
      return {
        entities: state.entities.filter(todo => todo.id !== action.payload.id)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        entities: state.entities.map(item => item.id === action.payload.id ?
          { ...item,
            complete: !action.payload.complete
          } : item)
      };

    default:
      return state;
  }
}

