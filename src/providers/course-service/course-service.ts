import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
 Generated class for the CourseServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class CourseServiceProvider {
url = "assets/codetribe.json";
 constructor(public http: HttpClient) {

 }
 getCourses(){
   return this.http.get(this.url);
 }

}