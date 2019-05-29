import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        return this.http.get(`https://next.json-generator.com/api/json/get/EJflQ5wpI`)
            .pipe(
                map((response) => response as User),
                catchError((err) => Observable.throw(err))
            );

    }

}
