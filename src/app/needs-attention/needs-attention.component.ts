import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  styleUrls: ['./needs-attention.component.css']
})
export class NeedsAttentionComponent {
}