import { Component, Input, OnInit } from '@angular/core';
// import { Books } from '../model/Books';
import { BookService } from '../product-list.component.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  livros: Array<any> = [];

  // @Input()
  // livro!: Books

  constructor(private bookService: BookService) { 
  }
  
  ngOnInit(): void {
    this.getBook()
  }

  getBook() {
    this.bookService.getBook().subscribe(result => {
      this.livros = result.books;
      console.log(this.livros)
    })
  }

}
