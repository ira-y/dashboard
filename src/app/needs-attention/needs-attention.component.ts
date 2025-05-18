import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * NeedsAttentionComponent displays alerts and notifications
 * that require the user's attention for the current account.
 */
@Component({
  selector: 'app-needs-attention',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './needs-attention.component.html',
  styleUrls: ['./needs-attention.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsAttentionComponent {
}