import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() add = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(todoText: String) {
    this.add.emit(todoText);
  }
}
