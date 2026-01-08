import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { ApiLearning } from './api-learning/api-learning';

const routes: Routes = [
  {path: 'todo', component: TodoList},
  {path: 'api', component: ApiLearning},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
