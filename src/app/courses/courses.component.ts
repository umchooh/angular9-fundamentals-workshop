import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }


  // this is the beginning the lifecycle hook - important to add/implement with the interface of the component !
  // this will fired when component is initalized or all of the binding have been satisfied
  // when you run constructor, the function will run immediately and we dont have control of it
  // so with this LCH, we can safely sate that when asynch is running, the data is here when the component is initialized
  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  // Create empty object to solve the null issue. 
  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course){
    console.log('Selected course is', course);
    this.selectedCourse = course;
  }

  saveCourse() {
    console.log('Course SAVED');
  }

  deleteCourse(courseId) {
    console.log('Course DELECTED', courseId);
  }
  
  cancel() {
    this.resetSelectedCourse();
  }

}
