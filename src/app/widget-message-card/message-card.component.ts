import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MessageCardComponent {
  @Input() isNew: boolean = false;
  @Input() status: string = '';
  @Input() title: string = '';
  @Input() sender: string = '';
  @Input() date: string = '';
  @Input() content: string = '';
  @Input() attachmentsCount: number = 0;
}