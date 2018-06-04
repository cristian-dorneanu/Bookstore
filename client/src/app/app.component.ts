import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BookService} from './services/book.service';
import {OktaService} from './shared/okta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [BookService]
})

export class AppComponent implements OnInit{
  title = 'Bookstore';
  user: any;
  private _oktaSignIn;

  constructor(private _okta: OktaService, private _changeDetectorRef: ChangeDetectorRef) {
    this._oktaSignIn = _okta.getWidget();
  }

  ngOnInit() {
    this._oktaSignIn.session.get(response => {
      console.log(response.status);
      if (response.status !== 'INACTIVE') {
        console.log(response.login);
        this.user = response.login;
        this._changeDetectorRef.detectChanges();
      } else {
        this.showLogin();
      }
    });
  }

  logout() {
    this._oktaSignIn.signOut(() => {
      this.user = undefined;
      this._changeDetectorRef.detectChanges();
      this.showLogin();
    });
  }

  showLogin() {
    this._oktaSignIn.renderEl({el: '#okta-login-container'}, response => {
      console.log(response.status);
      if (response.status === 'SUCCESS') {
        this.user = response.claims.email;
        this._oktaSignIn.remove();
        this._changeDetectorRef.detectChanges();
      }
    });
  }
}
