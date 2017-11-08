import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  //
  // Section 2
  // template: `
  //   <h1>Hey guys!<h1>
  //
  //   <!--
  //     <h3>Section 2, Lecture 3<h3>
  //
  //     <p>*** {{ myObject.location }}<p>
  //
  //     <ul>
  //       <li *ngFor="let arr of myArr">{{ arr }}</li>
  //       <li *ngIf="myArr">Yeah, I exist.</li>
  //       <li *ngIf="mySomething != 'nothing'">Yeah, I'm something'.</li>
  //       <li *ngIf="myNothing; else otherTmpl">Yeah, I'm really something'.</li>
  //     </ul>
  //
  //     <ng-template #otherTmpl>Noooooo... I'm not nothing.</ng-template>
  //
  //     <div *ngIf="mySomething; then tmpl1 else tmpl2"></div>
  //     <!- - <div *ngIf="myNothing; then tmpl1 else tmpl2"></div> - ->
  //     <ng-template #tmpl1>Truth</ng-template>
  //     <ng-template #tmpl2>False</ng-template>
  //   -->
  //
  //   <!--
  //     <h3>Section 2, Lecture 4<h3>
  //
  //     <img src="{{ angularLogo }}">
  //     <img [src]="angularLogo">
  //     <img bind-src="angularLogo">
  //
  //     <button [disabled]="buttonStatusBoolean">My Button</button>
  //     <button [disabled]="buttonStatus != 'enabled'">My Button</button>
  //   -->
  //
  //     <h3>Section 2, Lecture 5<h3>
  //
  //     <-- <button (click)="myEvent($event)">My Button (click)</button> -->
  //     <button (mouseenter)="myEvent($event)">My Button (mouseenter)</button>
  //
  //   `,
  //
  // Section 3
  // template: `
  //   <!-- <h1>Section 3, Lecture 6<h1> -->
  //
  //   <!-- <h1 [class]="titleClass">Section 3, Lecture 7<h1> -->
  //   <!-- <h1 [class.red-title]="titleClassBoolean">Section 3, Lecture 7<h1> -->
  //   <!-- <h1 [ngClass]="titleClasses">Section 3, Lecture 7<h1> -->
  //
  //   <!-- <h1 [style.color]="titleStyle">Section 3, Lecture 8<h1> -->
  //   <!-- <h1 [style.color]="titleStyleBoolean ? 'green' : 'pink'">Section 3, Lecture 8<h1> -->
  //   <h1 [ngStyle]="titleStyles">Section 3, Lecture 8<h1>
  // `,
  //
  // Section 4
  template: `

    <!--
      Section 4, Lecture 9
      <p>{{ someProperty }}</p>
    -->

    <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>

  `,



  // styleUrls: ['./app.component.css']
  styles: [`
    /* Section 3, Lecture 6
      h1 {
        text-decoration: underline;
      }
    */

    /* Section 3, Lecture 7
      .red-title {
        color: red;
      }
      .large-title {
        font-size: 4em;
      }
    */

    /* Section 4, Lecture 10 */
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }

  `],

  // Section 4, Lecture 10
  animations: [
    trigger('myAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      // transition('small <=> large', animate('300ms ease-in')),
      // transition('small <=> large', animate('300ms ease-in', style({
      //   transform: 'translateY(40px)'
      // }))),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        // style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateY(35px)', offset: .5 }),
        // style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        style({ opacity: 0, offset: 0 }),
        style({ opacity: .5, offset: .5 }),
        style({ opacity: 1, offset: 1 }),
      ]))),

    ]),
  ],

})

export class AppComponent {
  // title = 'app works!';

  /*
    // Section 2, Lecture 3
    myObject = {
        gender: 'male',
        age: 33,
        location: 'Brasil'
    }
    myArr = ['him', 'hers', 'yours']
    mySomething = 'something'
  */

  /*
    // Section 2, Lecture 4
    angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

    buttonStatusBoolean = false;
    buttonStatus = 'enabled';
  */

  /*
    // Section 2, Lecture 5
    myEvent(event) {
      console.log(event);
    }
  */

  /*
    // Section 3, Lecture 7
    titleClass ='red-title';
    titleClassBoolean = true;
    titleClasses = {
      'red-title': true,
      'large-title': true
    }
  */

  /*
    // Section 3, Lecture 8
    titleStyle = 'blue';
    titleStyleBoolean = true;
    titleStyles = {
      'color' : '#008B8B',
      'font-size' : '4em'
    }
  */

  /*
    // Section 4, Lecture 9
    constructor(private dataService:DataService) {

    }

    someProperty:string = '';

    ngOnInit() {
      console.log(this.dataService.cars);

      this.someProperty = this.dataService.myData();
    }
  */

  // Section 4, Lecture 10
  state:string = 'small';

  constructor(private dataService:DataService) {

  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }



}
