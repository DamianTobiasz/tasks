import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { DateDTO } from '../../../application/ports/secondary/date.dto';
import { DateDtoStoragePort } from '../../../application/ports/secondary/date-dto.storage-port';

@Injectable()
export class InMemoryDateStorage
  extends ReplaySubject<DateDTO>
  implements DateDtoStoragePort
{
  getDate(): Observable<DateDTO> {
    return of({ date: new Date() });
  }
}
