import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() add = new EventEmitter<Todo>();
  public newTodo: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.add.emit({
      id: 1,
      text: this.newTodo,
      complete: false
  });
    this.newTodo = '';
  }
}
