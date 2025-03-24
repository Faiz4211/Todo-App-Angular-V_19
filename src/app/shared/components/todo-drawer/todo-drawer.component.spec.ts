import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDrawerComponent } from './todo-drawer.component';

describe('TodoDrawerComponent', () => {
  let component: TodoDrawerComponent;
  let fixture: ComponentFixture<TodoDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
