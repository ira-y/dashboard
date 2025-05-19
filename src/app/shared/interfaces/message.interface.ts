export interface IMessage {
  isNew: boolean;
  status?: string;
  title: string;
  sender: string;
  date: string;
  content: string;
  attachmentsCount?: number;
}
