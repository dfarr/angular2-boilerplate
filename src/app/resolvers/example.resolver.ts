
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { API } from '../api';


@Injectable()
export class ExampleResolver implements Resolve<any> {

  constructor(private api: API, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    // return this.api.get([ 'stuff' ]);

    return Observable.of({});

  }

}
