import {Injectable} from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
export class OktaService {
  private readonly _widget: any;

  constructor() {
    this._widget = new OktaSignIn({
      baseUrl: 'https://dev-436030.oktapreview.com',
      clientId: '0oafb9qvx7gmFeX0F0h7',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer : 'default'
      }
    });
  }

  getWidget() {
    return this._widget;
  }
}
