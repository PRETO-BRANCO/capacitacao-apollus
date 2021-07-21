import { Injectable } from '@angular/core';
import { Banda } from './banda.model';
import { bandas } from './bandas-mock';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandasService {
  constructor() {}

  public listarBandas(): Observable<Banda[]> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(bandas);
        subscriber.complete();
      }, 2000);
    });
  }
}
