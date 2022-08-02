import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  // livros = [];

  constructor() {}

  ngOnInit(): void {
    // this.getBook()
  }

  // getBook() {
  //   this.bookService.getBook().subscribe(result => {
  //     this.livros = result.books;
  //     console.log(this.livros)
  //   })
  // }

}
