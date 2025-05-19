import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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