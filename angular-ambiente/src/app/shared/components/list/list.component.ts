import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
