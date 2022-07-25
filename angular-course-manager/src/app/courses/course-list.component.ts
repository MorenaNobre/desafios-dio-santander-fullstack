import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageUrl: '',
        price: 99.9,
        code: 'XPTS_900',
        duration: 120,
        rating: 5.3,
        releaseDate: "11/11/2011",
      },
      {
        id: 2,
        name: 'Angular - full',
        imageUrl: '',
        price: 199.90,
        code: 'XPTS_700',
        duration: 340,
        rating: 8,
        releaseDate: "11/11/2011",
      },
    ];
  }
}
