import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAlertComponent } from './task-alert.component';

import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, AlertModule.forRoot()],
  declarations: [TaskAlertComponent],
  providers: [],
  exports: [TaskAlertComponent],
})
export class TaskAlertComponentModule {}
