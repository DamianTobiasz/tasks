import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTaskModalComponent } from './delete-task-modal.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DeleteTaskModalComponent],
  	providers: [],
  	exports: [DeleteTaskModalComponent] })
export class DeleteTaskModalComponentModule {
}
