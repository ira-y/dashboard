import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCardComponent } from "../widget-message-card/message-card.component";
import { IMessage } from '../shared/interfaces/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports: [CommonModule, MessageCardComponent]
})
export class MessageComponent {
messageWidgets: IMessage[] = [
    {
      isNew: true,
      status: 'NEW',
      title: 'Policy Renewal - Auto Insurance 5/15/25',
      sender: 'Michael Roberts',
      date: 'Apr 5',
      content: "Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC: The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? Iive attached the current policy details and premium breakdown for your reference.",
      attachmentsCount: 3,
    },
    {
      isNew: false,
      status: 'Responded',
      title: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
      sender: 'Joshua Dunmire',
      date: 'Mar 25',
      content: "Arthur, attached please find our submission for the above mentioned applicant. We have...",
      attachmentsCount: 3,
    },
    {
      isNew: true,
      status: 'NEW',
      title: 'New Quote Request - Workers Comp Insurance',
      sender: 'Sarah Chen',
      date: 'Apr 5',
      content: "Hi. Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based",
      attachmentsCount: 3,
    },
    {
      isNew: false,
      title: 'New Business: BPM Real Estate Group, LLC',
      sender: 'Isabel Kreller',
      date: 'Feb 28',
      content: "Hello Arthur, I am pleased to present you with a submission on this client& #39;s upco...",
      attachmentsCount: 5,
    },
  ];
}