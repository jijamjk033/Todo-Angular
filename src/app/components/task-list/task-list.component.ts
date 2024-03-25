import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() important = new EventEmitter<any>()
  @Output() completed = new EventEmitter<any>()
  markImportant(task: any) {
    this.important.emit(task);
  }
  markCompleted(task: any) {
this.completed.emit(task);
  }
}
