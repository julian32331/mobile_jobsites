import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.page.html',
  styleUrls: ['./mainboard.page.scss'],
})
export class MainboardPage implements OnInit {
  step = 0;

  constructor() { }

  ngOnInit() {
  }

  special(){

    this.step = 0
    console.log('here is speciail', this.step)
  }

  service(){
    this.step = 1
  }

  message(){
    this.step = 2
  }

  more() {
    this.step = 3
  }
}
