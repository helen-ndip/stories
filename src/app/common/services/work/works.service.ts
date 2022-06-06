import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feature } from 'src/app/interface/service';
import { FEATURES_LIST } from '../../mock/features';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() { }

  getListServices() : Observable<Feature[]>{
    return of(FEATURES_LIST)
  }
}
