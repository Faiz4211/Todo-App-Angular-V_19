import { TestBed } from '@angular/core/testing';
import { DeleteAllTodosService } from './delete-all-todos.service';

describe('DeleteAllTodosService', () => {
  let service: DeleteAllTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAllTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
