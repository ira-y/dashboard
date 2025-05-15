import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectActiveTask, selectAllTasks } from "../store/task/tasks.selectors";
import { WorkQueueTableComponent } from "../work-queue-table/work-queue-table.component";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.css'],
  standalone: true,
  imports: [CommonModule, WorkQueueTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkQueueComponent {
  tasks$ = this.store.select(selectAllTasks);
  activeTask$ = this.store.select(selectActiveTask);

  constructor(private store: Store) {}

  activeTab: 'assigned' | 'pending' | 'referrals' = 'assigned';


  changeTab(tab: 'assigned' | 'pending' | 'referrals'): void {
    // For future implementation when tabs become functional
    this.activeTab = tab;

    // If needed, we can filter tasks based on tab here
    // switch (tab) {
    //   case 'assigned':
    //     this.tasks = this.workQueueService.getAssignedTasks();
    //     break;
    //   case 'pending':
    //     this.tasks = this.workQueueService.getPendingReviewTasks();
    //     break;
    //   case 'referrals':
    //     this.tasks = this.workQueueService.getReferralTasks();
    //     break;
    // }
  }

  // onMoreActions(taskId: string): void {
  //   // For future implementation when actions become functional
  //   console.log('More actions clicked for task', taskId);
  // }
}