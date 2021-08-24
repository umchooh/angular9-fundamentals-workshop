import { Component } from '@angular/core';

//this is a decorator --- metadata (Typescript)
// a function that get call and you can create your own decorator that when its being compiled,
// it hits the decorator, then call its function , component configuration object pass as parameter, then it perform some functionality
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// this is the class
export class AppComponent {
  //property
  title = 'Angular 9 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  //method
  constructor() {}
}
