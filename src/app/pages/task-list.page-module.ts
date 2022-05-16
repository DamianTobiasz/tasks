import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { TodayComponentModule } from '@home';
import { FirebaseTasksServiceModule, TaskListComponentModule } from '@tasks';

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
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: [],
})
export class TaskListPageModule {}
