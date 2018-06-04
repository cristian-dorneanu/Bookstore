import {OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../services/alert.service';

export class AlertComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  message: any;

  constructor(private _alertServie: AlertService) {}
  ngOnInit() {
    this._subscription = this._alertServie.getMessage().subscribe(message => this.message = message);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
