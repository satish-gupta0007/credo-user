import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/';

@Injectable()
export class GeoLocationService {

  coordinates: any;

  constructor() { }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: any) => {
        observer.next(pos);
      }),
      () => {
          console.log('Position is not available');
      },
      {
        enableHighAccuracy: true
      };
    });
  }
}