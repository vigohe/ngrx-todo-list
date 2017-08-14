import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Todo} from './models/todo';
import {AddTodo} from './actions/todo';
import {State} from './reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public todos: Observable<Todo[]>;

  constructor(private store: Store<State>) {
    this.todos = store.select((state: State) => state.todo.entities );
  }

  addTodo(newTodo: Todo) {
    this.store.dispatch(new AddTodo(newTodo));
  }

}
