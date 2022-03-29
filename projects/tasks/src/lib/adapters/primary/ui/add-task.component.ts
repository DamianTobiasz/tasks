import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly taskDescription: FormGroup = new FormGroup({
    description: new FormControl(),
  });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {}
  //dlaczego wymusza mi opcjonala?
  onTaskDescriptionSubmited(taskDescription: FormGroup): void {
    this._addsTaskDto.add({
      id: '41',
      description: taskDescription.get('description')?.value,
      isDone: false,
    });
  }
}
