import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  
  selectedCourse;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();


  //set a setter 
  //make a clone copy
  @Input() set course(value) {
    if(value) {
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
