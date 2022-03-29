import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Injectable()
export class FirebaseTasksService implements GetsAllTaskDtoPort, AddsTaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.collection<TaskDTO>('tasks').valueChanges(({idField: 'id'})).pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks').add(task);
  }
}
