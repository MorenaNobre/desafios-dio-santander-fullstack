import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text= 'Morena Nobre';
  imageUrl = 'https://picsum.photos/id/237/300/300';
  imageDesc = 'Imagem cachorro';
  buttonText = 'Clique aqui';
  textRed = false;
  bgColor = 'green';
  fontSize = '50px';
  widthImg = 600;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    this.text = 'Morena a arrasadora na programação!'
    this.textRed = true;
    console.log('clicou', value)
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }

  incrementa() {
    this.number++
  }

  destroiComponent() {
    this.destroy = true;
  }

}
