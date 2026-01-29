import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TodoList } from './todo-list/todo-list';
import { ApiLearning } from './api-learning/api-learning';
import { Home } from './home/home';
import { ProductCard } from './ui/product-card/product-card';

@NgModule({
  declarations: [
    App,
    TodoList,
    ApiLearning,
    Home,
    ProductCard,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
