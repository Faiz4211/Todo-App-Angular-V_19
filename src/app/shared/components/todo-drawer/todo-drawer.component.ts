import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-drawer',
  imports: [CommonModule],
  templateUrl: './todo-drawer.component.html',
  styleUrl: './todo-drawer.component.css',
})
export class TodoDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeDrawer() {
    this.close.emit();
  }
}
