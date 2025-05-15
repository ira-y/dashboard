import { createReducer, on } from "@ngrx/store";
import { ICommunication } from "../../shared/interfaces/communication.interface";
import { loadCommunications, loadCommunicationsFailure, loadCommunicationsSuccess, sendReply, sendReplyFailure, sendReplySuccess } from "./communication.actions";

export interface CommunicationState {
  items: ICommunication[];
  loading: boolean;
  error: any;
  sendingReply: boolean;
}

export const initialState: CommunicationState = {
  items: [],
  loading: false,
  error: null,
  sendingReply: false
};

export const communicationsReducer = createReducer(
  initialState,
  on(loadCommunications, state => ({
    ...state,
    loading: true
  })),
  on(loadCommunicationsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
    error: null
  })),
  on(loadCommunicationsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(sendReply, state => ({
    ...state,
    sendingReply: true
  })),
  on(sendReplySuccess, (state, { communication }) => ({
    ...state,
    items: state.items.map(item => 
      item.id === communication.id ? { ...communication, isResponded: true } : item
    ),
    sendingReply: false,
    error: null
  })),
  on(sendReplyFailure, (state, { error }) => ({
    ...state,
    sendingReply: false,
    error
  }))
);