import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TodayComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/today.component-module';
import { NavToAddTaskComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/nav-to-add-task.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  TodayComponentModule,
  NavToAddTaskComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
