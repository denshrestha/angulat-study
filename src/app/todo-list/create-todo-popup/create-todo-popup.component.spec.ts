import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoPopupComponent } from './create-todo-popup.component';

describe('CreateTodoPopupComponent', () => {
  let component: CreateTodoPopupComponent;
  let fixture: ComponentFixture<CreateTodoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTodoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
