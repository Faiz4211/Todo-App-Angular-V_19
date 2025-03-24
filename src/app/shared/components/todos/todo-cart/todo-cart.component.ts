import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../../interface/todo';
import { TodoService } from '../../../../core/services/todo.service';

@Component({
  selector: 'app-todo-cart',
  imports: [CommonModule],
  templateUrl: './todo-cart.component.html',
  styleUrl: './todo-cart.component.css',
})
export class TodoCartComponent implements OnInit {
  todos: Todo[] = [];
  todoId: string = '670d0e439b7de8d4683b51e1';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodoById(this.todoId);
  }

  fetchTodoById(id: string) {
    this.todoService.getTodos(id).subscribe(
      (data: { feedbacks?: Todo[] }) => {
        console.log('API Response:', data?.feedbacks);
        if (data && Array.isArray(data.feedbacks)) {
          this.todos = data.feedbacks;
        }
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }

  @Output() onEditTodo = new EventEmitter<Todo>();

  @Output() onDeletTodoById = new EventEmitter<string>();

  @Output() onDeleteAllTodos = new EventEmitter<void>();

  @Output() onAddNewTodo = new EventEmitter<void>();

  onEdit(todo: Todo) {
    this.onEditTodo.emit(todo);
  }
  onDeleteById(todoId: string) {
    this.onDeletTodoById.emit(todoId);
  }
  onDeleteAll() {
    this.onDeleteAllTodos.emit();
  }
  onAddNew() {
    this.onAddNewTodo.emit();
  }
}
