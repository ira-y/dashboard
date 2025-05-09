import { ICommunication } from "../interfaces/communication.interface";

export const COMMUNICATIONS_MOCK: ICommunication[] = [
  {
    id: '1',
    title: 'Policy Renewal - Auto Insurance 5/15/25',
    sender: 'Michael Roberts',
    date: 'Apr 3',
    message: 'I\'m reaching out regarding the upcoming auto policy renewal for Real Estate Group LLC. With premium inflation on the rise, would you like to review coverage options before proceeding with the renewal? I\'ve attached the current policy details and premium breakdown for your reference.',
    isNew: true,
    isResponded: false,
    attachments: 3
  },
  {
    id: '2',
    title: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
    sender: 'Sarah Cummins',
    date: 'Mar 25',
    message: 'Arthur, attached please find our submission for the above mentioned applicant. We have...',
    isNew: false,
    isResponded: true,
    attachments: 4
  },
  {
    id: '3',
    title: 'New Quote Request - Workers Comp Insurance',
    sender: 'Sandra Cherry',
    date: 'Apr 3',
    message: 'Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I\'ve completed the initial risk assessment based...',
    isNew: true,
    isResponded: false,
    attachments: 3
  }
];