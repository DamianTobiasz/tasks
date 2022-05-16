import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  AlertTaskStateDtoStoragePort,
  ALERT_TASK_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/alert-task-state-dto.storage-port';
import { AlertTaskStateDTO } from '../../../application/ports/secondary/alert-task-state.dto';

@Component({
  selector: 'lib-task-alert',
  templateUrl: './task-alert.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskAlertComponent {
  alertState$: Observable<AlertTaskStateDTO> =
    this._alertTaskStorageDto.asObservable();
  constructor(
    @Inject(ALERT_TASK_STATE_DTO_STORAGE)
    private _alertTaskStorageDto: AlertTaskStateDtoStoragePort
  ) {}

  toDone(): void {
    this._alertTaskStorageDto.next(undefined);
  }
}
