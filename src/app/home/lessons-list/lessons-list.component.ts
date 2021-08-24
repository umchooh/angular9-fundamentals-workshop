import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
@Input() title = 'The Lesson List';
@Input() lessons;

//@Output() selectLesson = new EventEmitter();

currentLesson;

selectLesson(lesson) {
  console.log('Select lesson fired!', lesson);
  this.currentLesson = lesson;
}



constructor() { }

  ngOnInit(): void {
  }

}
