import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-drawer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-drawer.component.html',
  styleUrl: './todo-drawer.component.css',
})
export class TodoDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() formGroup!: FormGroup;
  @Input() editProps: string = '';
  @Output() onAddNewTodo = new EventEmitter<void>();
  @Output() onUpdateExistingTodo = new EventEmitter<void>();

  constructor() {
    console.log(this.editProps, 'editProps');
  }
  closeDrawer() {
    this.close.emit();
  }

  onAddNewNotes() {
    this.onAddNewTodo.emit();
  }
  onUpdateTodo() {
    this.onUpdateExistingTodo.emit();
  }
}
