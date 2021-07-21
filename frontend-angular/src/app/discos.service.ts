import { Injectable } from '@angular/core';
import { Disco } from './disco.model';
import { Observable } from 'rxjs';

import { discos } from './discos-mock';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {
  public listarDiscos(): Observable<Disco[]> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(discos);
        subscriber.complete();
      }, 2000);
    });
  }

  public buscarDisco(index: number): Observable<Disco> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(discos.find(disco => disco.id == index));
        subscriber.complete();
      }, 2000);
    });
  }

  public comprarDisco(disco: Disco): Observable<boolean> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(true);
        subscriber.complete();
      }, 2000);
    });
  }

  public adicionarDisco(disco: Disco): Observable<Disco> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(disco);
        subscriber.complete();
      }, 2000);
    });
  }

  public editarDisco(disco: Disco): Observable<Disco> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(disco);
        subscriber.complete();
      }, 2000);
    });
  }

  constructor() {}
}
