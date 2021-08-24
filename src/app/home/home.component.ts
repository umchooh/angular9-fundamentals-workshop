import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   // CHALLENGE
  // STEP 01: Create a LessonsService
  // hint: ng g s shared/services/lessons -d
  // STEP 02: Add the lessons service to app.module
  // STEP 03: Inject lessons service into component
  // STEP 04: Move lessons to service and consume in component

  title = 'Hello Workshop';
  currentLesson = null;

  courseLessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson) {
    console.log('Select lesson fired!', lesson);
    this.currentLesson = lesson;
  }
}
