import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AlertTaskStateDTO } from '../../../application/ports/secondary/alert-task-state.dto';
import { AlertTaskStateDtoStoragePort } from '../../../application/ports/secondary/alert-task-state-dto.storage-port';

@Injectable()
export class InMemoryAlertTaskStorage extends ReplaySubject<AlertTaskStateDTO> implements AlertTaskStateDtoStoragePort {
}
