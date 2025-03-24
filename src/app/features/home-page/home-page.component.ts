import { Component, EventEmitter, Output } from '@angular/core';
import { CustomHeaderComponent } from '../../shared/components/custom-header/custom-header.component';
import { TodoCartComponent } from '../../shared/components/todos/todo-cart/todo-cart.component';
import { TodoDrawerComponent } from '../../shared/components/todo-drawer/todo-drawer.component';
import { Todo } from '../../interface/todo';

@Component({
  selector: 'app-home-page',
  imports: [CustomHeaderComponent, TodoCartComponent, TodoDrawerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  handleAddNew() {
    this.isDrawerVisible = !this.isDrawerVisible;
  }
  handleEditTask(taskId: Todo) {
    console.log('Edit Task ID:', taskId);
    this.isDrawerVisible = !this.isDrawerVisible;
  }

  handleDeleteTask(taskId: string) {
    console.log('Delete Task ID:', taskId);
  }

  handleDeleteAllTasks() {
    console.log('All tasks deleted');
  }

  @Output() onTableCLicked = new EventEmitter<any>();

  isDrawerVisible: boolean = false;

  toggleDrawer() {
    this.isDrawerVisible = !this.isDrawerVisible;
  }
}
