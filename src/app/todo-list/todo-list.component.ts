import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() toggle = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(todo: Todo) {
    this.toggle.emit(todo);
  }

}
