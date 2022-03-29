import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTasksService } from './firebase-tasks.service';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTasksService,
    { provide: GETS_ALL_TASK_DTO, useExisting: FirebaseTasksService },
    { provide: ADDS_TASK_DTO, useExisting: FirebaseTasksService },
  ],
  exports: [],
})
export class FirebaseTasksServiceModule {}
