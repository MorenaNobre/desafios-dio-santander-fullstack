import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'Morena Nobre';
  text = '';

  pessoas = [
    {
      nome: 'Morena',
      sobrenome: 'Nobre',
      profissao: 'Desenvolvedora Frontend',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
      email: 'morena@dev.com'
    },
    {
      nome: 'Raira',
      sobrenome: 'Pagano',
      profissao: 'Coordenadora P&D Saúde Alimentar',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
      email: 'raira@nutri.com'
    },
    {
      nome: 'Peterson',
      sobrenome: 'Ramos',
      profissao: 'Diretor Escola do Estado de São Paulo',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
      email: 'peterson@diretor.com'
    },
    {
      nome: 'Gabriel',
      sobrenome: 'Smaira',
      profissao: 'Orientador de Educação Motora',
      descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
      email: 'gabs@terapeuta.com'
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log("Clicou", nome);
  }
}
