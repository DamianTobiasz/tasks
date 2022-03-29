import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {
  FirebaseImagesServiceModule,
  ImagesInlineComponentModule,
  NavToAddTaskComponentModule,
  TodayComponentModule,
} from '@home';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    TodayComponentModule,
    NavToAddTaskComponentModule,
    ImagesInlineComponentModule,
    FirebaseImagesServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
