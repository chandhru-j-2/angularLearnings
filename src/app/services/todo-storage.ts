import { Injectable } from '@angular/core';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoStorageService {
  private StorageName = 'todos';

  getAllTodos(): Todos[] {
    let savedTodos = localStorage.getItem(this.StorageName);
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  storeTodos(todos: Todos[]): void {
    localStorage.setItem(this.StorageName, JSON.stringify(todos));
  }
}
