import { NgModule } from '@angular/core';
import { InMemoryDateStorage } from './in-memory-date.storage';
import { DATE_DTO_STORAGE } from '../../../application/ports/secondary/date-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryDateStorage, { provide: DATE_DTO_STORAGE, useExisting: InMemoryDateStorage }],
  	exports: [] })
export class InMemoryDateStorageModule {
}
