import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.page.html',
  styleUrls: ['./specialists.page.scss'],
})
export class SpecialistsPage implements OnInit {
  stepIndex = 0

  constructor(private navCtl:NavController, private router: Router) { }

  ngOnInit() {
   
  }

  goSearch(){
    this.stepIndex = 0;
    console.log('search', this.stepIndex)
    this.navCtl.navigateRoot(['/mainboard/specialists/search']);
  }
  goHired(){
    this.stepIndex = 1;
    console.log('hire', this.stepIndex)

    this.navCtl.navigateRoot(['/mainboard/specialists/hired']);
  }

  goSaved(){
    this.stepIndex = 2;
    console.log('save', this.stepIndex)

    this.navCtl.navigateRoot(['/mainboard/specialists/saved']);
  }
}
