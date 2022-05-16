import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import {
  FirebaseImagesServiceModule,
  ImagesInlineComponentModule,
  TodayComponentModule,
} from '@home';
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
    FirebaseImagesServiceModule,
  ],
  declarations: [AddTaskPage],
  providers: [],
  exports: [],
})
export class AddTaskPageModule {}
