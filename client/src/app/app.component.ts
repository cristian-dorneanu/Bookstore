import { Component } from '@angular/core';
import {BookService} from './books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [BookService]
})
export class AppComponent {
  title = 'Bookstore';
}
