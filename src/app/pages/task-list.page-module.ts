import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { TodayComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/today.component-module';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '@tasks';
import { TaskAlertComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-alert.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskListPage,
      },
    ]),
    TodayComponentModule,
    TaskListComponentModule,
    FirebaseTasksServiceModule,
    TaskAlertComponentModule
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: [],
})
export class TaskListPageModule {}
