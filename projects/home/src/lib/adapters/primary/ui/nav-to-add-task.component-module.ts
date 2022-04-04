import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavToAddTaskComponent } from './nav-to-add-task.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavToAddTaskComponent],
  providers: [],
  exports: [NavToAddTaskComponent],
})
export class NavToAddTaskComponentModule {}
