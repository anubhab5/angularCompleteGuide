import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { Course } from '../../models/course';
import { CourseImageCardComponent } from '../course-image-card/course-image-card.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
