import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  RemovesTaskDtoPort,
  REMOVES_TASK_DTO,
} from '../../../application/ports/secondary/removes-task.dto-port';
import {
  TaskDtoStoragePort,
  TASK_DTO_STORAGE,
} from '../../../application/ports/secondary/task-dto.storage-port';

@Component({
  selector: 'lib-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTaskModalComponent {
  task$ = this._taskDtoStorage.asObservable();
  constructor(
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(TASK_DTO_STORAGE) private _taskDtoStorage: TaskDtoStoragePort,
    public bsModalRef: BsModalRef
  ) {}

  onConfirmDeleteBtnClicked(taskId: string): void {
    this._removesTaskDto.remove(taskId);
    this.bsModalRef.hide();
  }
}
