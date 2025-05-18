import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-compliance-docs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance-documentation.component.html',
  styleUrls: ['./compliance-documentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplianceDocumentationComponent {
}