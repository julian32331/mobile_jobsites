import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular'

@Component({
  selector: 'app-special-profile',
  templateUrl: './special-profile.page.html',
  styleUrls: ['./special-profile.page.scss'],
})
export class SpecialProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  backToSpecialist(){
    console.log('here')
  }

}
