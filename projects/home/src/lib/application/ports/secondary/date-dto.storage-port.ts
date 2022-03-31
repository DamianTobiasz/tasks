import { getLocaleDateFormat } from '@angular/common';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DateDTO } from './date.dto';

export const DATE_DTO_STORAGE = new InjectionToken<DateDtoStoragePort>(
  'DATE_DTO_STORAGE'
);

export interface DateDtoStoragePort {
  getDate(): Observable<DateDTO>;
}
