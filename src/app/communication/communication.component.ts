import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from "../message/message.component";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  standalone: true,
  imports: [CommonModule, MessageComponent]
})
export class CommunicationComponent {}