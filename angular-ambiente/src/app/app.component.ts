import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

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
      firstName: '',
      lastName: '',
      age: 0,
      occupation: '',
      description:
        '',
      email: '',
    },
  ];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.getPeople()
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

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
