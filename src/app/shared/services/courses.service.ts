import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//usually set in enviroment config
const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model ='courses';

  /*
  * No longer need them
    private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals !',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS !!',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];*/

  constructor(private http: HttpClient) { }
//when call all(), it will make a http call and return a observable
  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.post(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrl() {
    return`${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return`${this.getUrl()}/${id}`;
  }
}
