import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: string;
  @Output() taskRemoved = new EventEmitter<void>();

  onRemoveTask() {
    this.taskRemoved.emit();
  }
}
