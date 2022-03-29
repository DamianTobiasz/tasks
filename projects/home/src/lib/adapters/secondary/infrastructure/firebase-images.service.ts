import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllImageDtoPort } from '../../../application/ports/secondary/gets-all-image.dto-port';
import { ImageDTO } from '../../../application/ports/secondary/image.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseImagesService implements GetsAllImageDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<ImageDTO>): Observable<ImageDTO[]> {
    return this._client
      .collection<ImageDTO>('images')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: ImageDTO[]) => filterByCriterion(data, criterion)));
  }
}
