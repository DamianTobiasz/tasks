import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';

import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  declarations: [TaskListComponent],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
  exports: [TaskListComponent],
})
export class TaskListComponentModule {}
