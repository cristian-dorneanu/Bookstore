import {Component, OnInit} from '@angular/core';
import {IBook} from './book';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  pageTitle = 'Book List';
  errorMessage: string;

  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  private _listFilter: string;
  filteredBooks: IBook[];
  books: IBook[] = [];

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this._bookService.getBooks()
      .subscribe(books => {
          this.books = books;
          this.filteredBooks = this.books;
        },
          error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Book List ' + message;
  }

  performFiltering(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
            book.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this._listFilter ? this.performFiltering(this.listFilter) : this.books;
  }
}
