import { FormGroup, FormControl, Validators } from '@angular/forms';
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
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly taskDescription: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    private router: Router
  ) {}

  onTaskDescriptionSubmited(taskDescription: FormGroup): void {
    this._addsTaskDto.add({
      description: taskDescription.get('description')?.value,
      isDone: false,
    });
    this.router.navigate(['/task-list']);
  }
}
