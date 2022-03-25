import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TodayComponent],
  	providers: [],
  	exports: [TodayComponent] })
export class TodayComponentModule {
}
