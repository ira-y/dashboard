import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-score-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-indicator.component.html',
  styleUrls: ['./score-indicator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreIndicatorComponent {

}