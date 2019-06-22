import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://192.168.8.100:3002/';

  constructor(private httpClient: HttpClient) { }

  createUser(requestObject): Observable<any> {
    return this.httpClient.post(this.url + 'user/create', requestObject);
  }

  loadAllUsers(requestObject): Observable<any> {
    return this.httpClient.post(this.url + 'user/load-all', requestObject).pipe(
     map (res => {
       console.log(res);
     })
    )
  }
}
