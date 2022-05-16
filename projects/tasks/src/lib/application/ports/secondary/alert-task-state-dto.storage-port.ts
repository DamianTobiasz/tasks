import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertTaskStateDTO } from './alert-task-state.dto';

export const ALERT_TASK_STATE_DTO_STORAGE = new InjectionToken<AlertTaskStateDtoStoragePort>('ALERT_TASK_STATE_DTO_STORAGE');

export interface AlertTaskStateDtoStoragePort {
  next(item: Partial<AlertTaskStateDTO | undefined>): void;
  asObservable(): Observable<AlertTaskStateDTO>;
}
