import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseImagesService } from './firebase-images.service';
import { GETS_ALL_IMAGE_DTO } from '../../../application/ports/secondary/gets-all-image.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseImagesService,
    { provide: GETS_ALL_IMAGE_DTO, useExisting: FirebaseImagesService },
  ],
  exports: [],
})
export class FirebaseImagesServiceModule {}
