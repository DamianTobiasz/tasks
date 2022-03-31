import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  DATE_DTO_STORAGE,
  DateDtoStoragePort,
} from '../../../application/ports/secondary/date-dto.storage-port';
import { DateDTO } from '../../../application/ports/secondary/date.dto';

@Component({
  selector: 'lib-today',
  templateUrl: './today.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayComponent {
  today$: Observable<DateDTO> = this._getDateDtoPort.getDate();
  constructor(
    @Inject(DATE_DTO_STORAGE) private _getDateDtoPort: DateDtoStoragePort
  ) {}
}
