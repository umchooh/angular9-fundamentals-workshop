import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Update the form to show percentComplete
  // STEP 02: Updaet the form to show favorite

  // CHALLENGE
  // STEP 01: Complete remote update call
  // STEP 02: Complete remote delete call
  // STEP 03: Fix UI on completed operation

  selectedCourse = null;

  courses = null;

//dependency injection after setting provider services on app.module
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    //this.courses = this.coursesService.all();
    //after injection on constrcutor, set courses to null, add to ngOnInit

    //since HTTPClient setting return an observable, we need to resolve it at component. 
    //replace line 23 - this.courses = this.coursesService.all(); to this:
    this.loadCourses();

  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  saveCourse(course) {
    if(course.id){
      this.coursesService.update(course)
      .subscribe(result => this.refreshCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.refreshCourses());
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.refreshCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
