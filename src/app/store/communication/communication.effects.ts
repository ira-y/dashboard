import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { loadCommunications, loadCommunicationsFailure, loadCommunicationsSuccess, sendReply, sendReplyFailure, sendReplySuccess } from "./communication.actions";
import { ICommunicationsService } from "../../shared/services/communicatin.service";

@Injectable()
export class CommunicationsEffects {
  loadCommunications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCommunications),
      switchMap(() =>
        this.communicationsService.getCommunications().pipe(
          map(communications => loadCommunicationsSuccess({ items: communications })),
          catchError(error => of(loadCommunicationsFailure({ error })))
        )
      )
    )
  );

  sendReply$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendReply),
      switchMap(({ communicationId, message }) =>
        this.communicationsService.sendReply(communicationId, message).pipe(
          map(communication => sendReplySuccess({ communication })),
          catchError(error => of(sendReplyFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private communicationsService: ICommunicationsService,
  ) {}
}