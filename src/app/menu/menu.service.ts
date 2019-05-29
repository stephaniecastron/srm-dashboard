import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class MenuService {

    constructor(private http: HttpClient) { }

    getMenu(): Observable<Array<Menu>> {
        return this.http.get(`https://next.json-generator.com/api/json/get/EJYTgyDpI`)
            .pipe(
                map((response) => response as Array<Menu>),
                catchError((err) => Observable.throw(err))
            );

    }

}
