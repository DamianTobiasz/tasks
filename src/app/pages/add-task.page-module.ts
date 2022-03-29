import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { TodayComponentModule, ImagesInlineComponentModule } from '@home';
import { AddTaskComponentModule, FirebaseTasksServiceModule } from '@tasks';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTaskPage,
      },
    ]),
    TodayComponentModule,
    ImagesInlineComponentModule,
    AddTaskComponentModule,
    FirebaseTasksServiceModule,
  ],
  declarations: [AddTaskPage],
  providers: [],
  exports: [],
})
export class AddTaskPageModule {}
