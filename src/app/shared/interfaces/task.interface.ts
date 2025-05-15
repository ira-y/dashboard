export interface IUser {
  id: string;
  name: string;
  initials: string;
}

export interface ITask {
  id: string;
  originator: IUser;
  client: string;
  line?: string;
  type: string;
  status: string;
  created: string;
}