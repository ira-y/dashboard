import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesTableComponent } from "../policies-table/policies-table.component";

@Component({
  selector: 'app-policies-main',
  standalone: true,
  imports: [CommonModule, PoliciesTableComponent],
  templateUrl: './policies-main.component.html',
  styleUrls: ['./policies-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesMainComponent {
}