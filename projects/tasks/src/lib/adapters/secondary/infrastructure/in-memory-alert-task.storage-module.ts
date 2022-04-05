import { NgModule } from '@angular/core';
import { InMemoryAlertTaskStorage } from './in-memory-alert-task.storage';
import { ALERT_TASK_STATE_DTO_STORAGE } from '../../../application/ports/secondary/alert-task-state-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryAlertTaskStorage, { provide: ALERT_TASK_STATE_DTO_STORAGE, useExisting: InMemoryAlertTaskStorage }],
  	exports: [] })
export class InMemoryAlertTaskStorageModule {
}
