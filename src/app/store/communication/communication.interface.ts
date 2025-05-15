import { ICommunication } from "../../shared/interfaces/communication.interface";

export interface ICommunicationState {
  items: ICommunication[];
  loading: boolean;
  error: any;
  sendingReply: any;
}