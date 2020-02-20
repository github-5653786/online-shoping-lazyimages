import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ser: MyserviceService, private router: Router) { }

  ngOnInit() {
  }

  validate(e) {
    let a = e.email;
    let b = e.password;
    let c = this.ser.istrue(a, b);
    if (c == true) {
      localStorage.setItem("user", a);
      this.router.navigate(['/home'])
    } else {
      alert("You should enter correct email and password")
      location.reload();
    }
  }

}
