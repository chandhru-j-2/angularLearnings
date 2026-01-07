import { TestBed } from '@angular/core/testing';

import { TodoStorage } from './todo-storage';

describe('TodoStorage', () => {
  let service: TodoStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
