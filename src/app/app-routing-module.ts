import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';

const routes: Routes = [
  {path: 'todo', component: TodoList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
