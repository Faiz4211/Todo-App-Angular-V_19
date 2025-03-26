import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../../interface/todo';

@Component({
  selector: 'app-todo-cart',
  imports: [CommonModule],
  templateUrl: './todo-cart.component.html',
  styleUrl: './todo-cart.component.css',
})
export class TodoCartComponent {
  todoId: string = '670d0e439b7de8d4683b51e1';

  @Input() todos: Todo[] = [];

  @Output() onDeletTodoById = new EventEmitter<string>();

  @Output() onDeleteAllTodos = new EventEmitter<void>();

  @Output() onAddNewTodo = new EventEmitter<void>();

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
