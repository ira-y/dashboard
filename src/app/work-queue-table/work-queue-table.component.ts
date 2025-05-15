import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITask } from '../shared/interfaces/task.interface';

@Component({
  selector: 'app-work-queue-table',
  templateUrl: './work-queue-table.component.html',
  styleUrl: './work-queue-table.component.css',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkQueueTableComponent {
  @Input() tasks: ITask[] = [];
}
