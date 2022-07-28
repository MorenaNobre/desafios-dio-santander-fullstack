import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo = "#adb5bd";
  @Input() corDoTexto = "white";

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = "#adb5bd") {
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeight = "bold";
  }
}
