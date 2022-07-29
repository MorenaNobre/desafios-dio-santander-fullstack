import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Morena',
        lastName: 'Nobre',
        age: 39,
        occupation: 'Desenvolvedora Frontend',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
        email: 'morena@dev.com',
      },
      {
        firstName: 'Raira',
        lastName: 'Pagano',
        age: 30,
        occupation: 'Coordenadora P&D Saúde Alimentar',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
        email: 'raira@nutri.com',
      },
      {
        firstName: 'Peterson',
        lastName: 'Ramos',
        age: 41,
        occupation: 'Diretor Escola do Estado de São Paulo',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
        email: 'peterson@diretor.com',
      },
      {
        firstName: 'Gabriel',
        lastName: 'Smaira',
        age: 30,
        occupation: 'Orientador de Educação Motora',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quod unde, similique debitis voluptatem mollitia.',
        email: 'gabs@terapeuta.com',
      },
    ];

    return of(peopleArray)
  }
}
