import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDTO } from './image.dto';

export const GETS_ALL_IMAGE_DTO = new InjectionToken<GetsAllImageDtoPort>('GETS_ALL_IMAGE_DTO');

export interface GetsAllImageDtoPort {
  getAll(criterion?: Partial<ImageDTO>): Observable<ImageDTO[]>;
}
