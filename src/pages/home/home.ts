import { InfoPage } from './../info/info';
import { CourseServiceProvider } from './../../providers/course-service/course-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
courses:any
arrCourses:any
 constructor(public navCtrl: NavController,private courseProvider:CourseServiceProvider) {
courseProvider.getCourses().subscribe(results => {
 this.courses= results;
 this.arrCourses=this.courses.courses
 console.log("response",results)
});
}
next(course:any){
  this.navCtrl.push(InfoPage,{value:course});
}
}