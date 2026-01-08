import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLearning } from './api-learning';

describe('ApiLearning', () => {
  let component: ApiLearning;
  let fixture: ComponentFixture<ApiLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiLearning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
