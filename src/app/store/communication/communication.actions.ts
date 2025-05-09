import { createAction, props } from "@ngrx/store";
import { ICommunication } from "../../shared/interfaces/communication.interface";

export const loadCommunications = createAction(
  '[Communications] Load Communications'
);

export const loadCommunicationsSuccess = createAction(
  '[Communications] Load Communications Success',
  props<{ items: ICommunication[] }>()
);

export const loadCommunicationsFailure = createAction(
  '[Communications] Load Communications Failure',
  props<{ error: any }>()
);

export const sendReply = createAction(
  '[Communications] Send Reply',
  props<{ communicationId: string; message: string }>()
);

export const sendReplySuccess = createAction(
  '[Communications] Send Reply Success',
  props<{ communication: ICommunication }>()
);

export const sendReplyFailure = createAction(
  '[Communications] Send Reply Failure',
  props<{ error: any }>()
);