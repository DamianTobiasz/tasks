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
import {
  RemovesTaskDtoPort,
  REMOVES_TASK_DTO,
} from '../../../application/ports/secondary/removes-task.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteTaskModalComponent } from './delete-task-modal.component';
import {
  TaskDtoStoragePort,
  TASK_DTO_STORAGE,
} from '../../../application/ports/secondary/task-dto.storage-port';

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  taskList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  bsModalRef?: BsModalRef;

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(TASK_DTO_STORAGE) private _storageTaskDto: TaskDtoStoragePort,
    private modalService: BsModalService
  ) {}

  onCheckChangeed(task: TaskDTO): void {
    this._setsTaskDto.set({
      id: task.id,
      isDone: !task.isDone,
    });
  }

  onListItemClicked(task: TaskDTO): void {
    this._removesTaskDto.remove(task.id);
  }

  onDeleteBtnClicked(task: TaskDTO): void {
    this.bsModalRef = this.modalService.show(DeleteTaskModalComponent);
    this._storageTaskDto.next(task);
  }
}
