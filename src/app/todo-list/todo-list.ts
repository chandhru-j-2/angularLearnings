import { Component } from '@angular/core';
import { Todos } from '../models/todos';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})

export class TodoList {
  todoList: Todos[] = [];
  ngOnInit(): void {
    let savedTodos = localStorage.getItem('todos');
    this.todoList = savedTodos ? JSON.parse(savedTodos) : [];
  }
  newTitle: string = '';
  newDesc: string = '';
  newDate: string = '';

  get doDisableAdd(): boolean {
    return !(this.newTitle.trim().length && this.newDesc.trim().length && this.newDate);
  }

  private resetValues() {
    this.newTitle = '';
    this.newDesc = '';
    this.newDate = '';
  }

  private persistValues() {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  addTodo() {
    if (this.newTitle.trim().length && this.newDesc && this.newDate) {
      let newTodo: Todos = {
        id: Date.now(),
        title: this.newTitle,
        desc: this.newDesc,
        date: this.newDate,
      };
      this.todoList.push(newTodo);

      this.resetValues();
      this.persistValues();
    }
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
    this.persistValues();
  }
}
