import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo[];
  @Output() toggle = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(todo: Todo) {
    this.toggle.emit(todo);
  }

}
