import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  todo = '';
  todos: string[] = [];

  ngOnInit() {
  }

  addTodo(event) {
    this.todos.push(this.todo);
    this.todo = '';
  }

}
