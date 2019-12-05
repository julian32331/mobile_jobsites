import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-specialistprofile',
  templateUrl: './specialistprofile.page.html',
  styleUrls: ['./specialistprofile.page.scss'],
})
export class SpecialistprofilePage implements OnInit {

  constructor(private navCtl:NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtl.pop();
    }, 1000);
  }

}
