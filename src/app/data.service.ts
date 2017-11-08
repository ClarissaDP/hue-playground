import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Chevrolet', 'Fusca'
  ]

  myData() {
    return 'This is my data, dude!';
  }

}
