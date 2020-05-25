import { Component } from '@angular/core';
import { COURSES } from '../assets/db-data';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-core-understanding';

  public courseList: Array<Course> = COURSES.slice(0, 2);

  ngOnInit() { }

}
