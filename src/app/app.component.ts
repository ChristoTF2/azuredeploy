import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "./User/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AutoPro Tracker';
  userType: string | null = '';

  constructor(private authService: AuthenticationService) {

  }
  ngOnInit() {
    this.authService.authStatus$.subscribe(userType => {
      this.userType = userType;
      console.log(this.userType);
    });
  }

}
