import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import {
  SetsTaskDtoPort,
  SETS_TASK_DTO,
} from '../../../application/ports/secondary/sets-task.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteTaskModalComponent } from './delete-task-modal.component';
import {
  TaskDtoStoragePort,
  TASK_DTO_STORAGE,
} from '../../../application/ports/secondary/task-dto.storage-port';
import {
  AlertTaskStateDtoStoragePort,
  ALERT_TASK_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/alert-task-state-dto.storage-port';
import { AlertTaskStateDTO } from '../../../application/ports/secondary/alert-task-state.dto';
import { __assign } from 'tslib';

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  taskList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  bsModalRef?: BsModalRef;
  alertState$: Observable<AlertTaskStateDTO> =
    this._alertStateDto.asObservable();

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(TASK_DTO_STORAGE) private _storageTaskDto: TaskDtoStoragePort,
    @Inject(ALERT_TASK_STATE_DTO_STORAGE)
    private _alertStateDto: AlertTaskStateDtoStoragePort,
    private modalService: BsModalService
  ) {}

  onUnCheckChanged(task: TaskDTO): void {
    this._setsTaskDto.set({
      id: task.id,
      isDone: !task.isDone,
    });

    this._alertStateDto.next({ state: 'completed' });
  }

  onCheckChanged(task: TaskDTO): void {
    this._setsTaskDto.set({
      id: task.id,
      isDone: !task.isDone,
    });
  }

  onDeleteBtnClicked(task: TaskDTO): void {
    this.bsModalRef = this.modalService.show(DeleteTaskModalComponent);
    this._storageTaskDto.next(task);
  }
}
