import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngular';
  // isUnchanged = false;
  // slogan:string='this is my first angular project';
  // displaySlogan:boolean=true;
  // displayMethod(){
  //   if(this.displaySlogan===true){
  //     this.displaySlogan=false;
  //   }else{
  //     this.displaySlogan=true;
  //   }
    
  // }
  firstName: string='Enter your First Name';
  lastName: string='Enter your Last Name';
  contactNumber:string='Enter your Number';
  dateOfBirth:string='dd/mm/yyyy';
}
