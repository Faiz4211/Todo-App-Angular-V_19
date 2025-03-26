import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CustomHeaderComponent } from '../../shared/components/custom-header/custom-header.component';
import { TodoCartComponent } from '../../shared/components/todos/todo-cart/todo-cart.component';
import { TodoDrawerComponent } from '../../shared/components/todo-drawer/todo-drawer.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AddTodoService } from '../../core/services/add-todo.service';
import AddTodo from '../../core/models/addTodoModel';
import { TodoService } from '../../core/services/todo.service';
import { Todo } from '../../interface/todo';
import { DeleteAllTodosService } from '../../core/services/delete-all-todos.service';
import { DeletTodoByIdService } from '../../core/services/delet-todo-by-id.service';

@Component({
  selector: 'app-home-page',
  imports: [CustomHeaderComponent, TodoCartComponent, TodoDrawerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  addNewForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  private addTodoService = inject(AddTodoService);

  addNewTodo = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  private todoService = inject(TodoService);
  private deleteAllTodos = inject(DeleteAllTodosService);
  private deleteTodoById = inject(DeletTodoByIdService);

  todos: WritableSignal<Todo[]> = signal<Todo[]>([]);

  userId: string = localStorage.getItem('userId') || '';

  ngOnInit() {
    this.fetchTodoById(this.userId);
  }

  fetchTodoById(id: string) {
    this.todoService.getTodos(id).subscribe(
      (data: { feedbacks?: Todo[] }) => {
        console.log('API Response:', data?.feedbacks);
        if (data && Array.isArray(data.feedbacks)) {
          this.todos.set(data?.feedbacks);
        }
      },
      (error) => console.error('Error fetching todos:', error)
    );
  }

  openDrawer() {
    this.isDrawerVisible = !this.isDrawerVisible;
  }

  handleAddNew() {
    const task: AddTodo = {
      title: this?.addNewForm?.value?.title!,
      description: this?.addNewForm?.value?.description!,
    };

    this.addTodoService.addNewTask(task, this.userId).subscribe({
      next: (data) => {
        alert(data?.message);

        const newTodo: Todo = {
          _id: data?.taskId,
          title: task.title,
          description: task.description,
          user: this.userId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __v: 0,
        };

        this.todos.update((prevTodos) => [...prevTodos, newTodo]);
        this.addNewForm.reset();
        this.isDrawerVisible = !this.isDrawerVisible;
      },
      error: (error) => {
        this.addNewForm.reset();
        console.error('Error adding task:', error);
      },
    });
  }
  handleDeleteTask(id: string) {
    this.deleteTodoById.deletTodoById(id).subscribe(
      (data) => {
        alert(data?.message);
        this.todos.set(this.todos().filter((todo) => todo._id !== id));
      },
      (error) => console.error('Error deleting todo:', error)
    );
  }

  handleDeleteAllTasks() {
    this.deleteAllTodos.deleteAllTodos().subscribe({
      next: (data) => {
        alert(data?.message);
        this.todos.set([]);
      },
      error: (error) => console.error('Error deleting tasks:', error),
    });
  }

  isDrawerVisible: boolean = false;

  toggleDrawer() {
    this.isDrawerVisible = !this.isDrawerVisible;
  }
}
