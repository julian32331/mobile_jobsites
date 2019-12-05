import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  password = true;
  constructor() { }

  ngOnInit() {
  }

  clickShowable() {
    this.password = !this.password
  }

}
