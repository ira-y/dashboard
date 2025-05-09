export interface ICommunication {
  id: string;
  title: string;
  sender: string;
  date: string;
  message: string;
  isNew: boolean;
  isResponded: boolean;
  attachments: number;
}