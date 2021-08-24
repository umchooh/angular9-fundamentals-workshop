import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
//presentation component; how you do unit testing? NO test in tuis component cause no logic in this test maybe do an end testing.
export class CoursesListComponent implements OnInit {
  @Input() courses;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
