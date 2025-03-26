import { TestBed } from '@angular/core/testing';
import { DeletTodoByIdService } from './delet-todo-by-id.service';

describe('DeletTodoByIdService', () => {
  let service: DeletTodoByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletTodoByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
