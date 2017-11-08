import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  // styleUrls: ['./my-new-component.component.css'],
  styleUrls: ['../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
