import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Env }   from './env';
import { Utils } from './utils';


/////////////////////////////////////////////////////////
// Helper functions
/////////////////////////////////////////////////////////

function log(type: string, url: string, res: any) {
  console.log(type, url, res);
}


/////////////////////////////////////////////////////////
// API
/////////////////////////////////////////////////////////

@Injectable()
export class API {

  constructor(private http: Http) {}

  /////////////////////////////////////////////////////////
  // Get
  /////////////////////////////////////////////////////////

  get<T>(path: string[], head?: any): Observable<T> {

    let URL = Env.API_URL + '/' + path.join('/');

    let headers = new Headers(head || {});

    let options = new RequestOptions({ headers: headers });

    return this.http.get(URL, options)
                    .map(res => res.json())
                    .do(res  => log('GET', URL, res))
                    .catch(this.handleError);

  }


  /////////////////////////////////////////////////////////
  // Post
  /////////////////////////////////////////////////////////

  post<T>(path: string[], body: any, head?: any): Observable<T> {

    let URL = Env.API_URL + '/' + path.join('/');

    let headers = new Headers(head || {});

    let options = new RequestOptions({ headers: headers });

    return this.http.post(URL, body, options)
                    .map(res => res.json())
                    .do(res  => log('POST', URL, res))
                    .catch(this.handleError);

  }


  /////////////////////////////////////////////////////////
  // Error Handling
  /////////////////////////////////////////////////////////

  handleError(err: any) {

    return Observable.throw(err.message ? err.message : err.status ? `${err.status}: ${err.statusText}` : 'Server error');

  }

}
