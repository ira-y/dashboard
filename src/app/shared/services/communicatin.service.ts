import { Injectable } from "@angular/core";
import { ICommunication } from "../interfaces/communication.interface";
import { COMMUNICATIONS_MOCK } from "../mock-data/communications.mock";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ICommunicationsService {
  getCommunications(): Observable<ICommunication[]> {
    return of(COMMUNICATIONS_MOCK);
  }

  sendReply(communicationId: string, message: string): Observable<ICommunication> {
    const communication = COMMUNICATIONS_MOCK.find(comm => comm.id === communicationId);
    
    if (!communication) {
      throw new Error('Communication not found');
    }
    
    const updatedCommunication: ICommunication = {
      ...communication,
      isResponded: true
    };

    return of(updatedCommunication);
  }
}