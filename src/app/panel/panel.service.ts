import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { AlertAction } from './panel';


@Injectable()
export class PanelService {

  constructor(private http: HttpClient) { }

  getActions(): Observable<Array<AlertAction>> {
    return this.http.get(`https://next.json-generator.com/api/json/get/Nk7jVHupU`)
      .pipe(
        map((response) => response as Array<AlertAction>),
        catchError((err) => Observable.throw(err))
      );

  }

}
