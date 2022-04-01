import { NgModule } from '@angular/core';
import { InMemoryTaskStorage } from './in-memory-task.storage';
import { TASK_DTO_STORAGE } from '../../../application/ports/secondary/task-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTaskStorage, { provide: TASK_DTO_STORAGE, useExisting: InMemoryTaskStorage }],
  	exports: [] })
export class InMemoryTaskStorageModule {
}
