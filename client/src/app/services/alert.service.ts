import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Injectable()
export class AlertService {
  private _subject = new Subject<any>();
  private _keepAfterNavigationChange = false;

  constructor(private _router: Router) {
    _router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this._keepAfterNavigationChange) {
          this._keepAfterNavigationChange = false;
        } else {
          this._subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this._keepAfterNavigationChange = keepAfterNavigationChange;
    this._subject.next({type: 'success', test: message});
  }

  error(message: string, keepAfterNavigationChange = false) {
    this._keepAfterNavigationChange = keepAfterNavigationChange;
    this._subject.next({type: 'error', text: message});
  }

  getMessage(): Observable<any> {
    return this._subject.asObservable();
  }
}
