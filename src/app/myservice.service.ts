import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  istrue(a, b) {
    if (a == "mustafa@gmail.com" && b == "123") {
      return true;
    } else {
      return false;
    }
  }

}
