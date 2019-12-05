import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SignuporloginPage } from './../signuporlogin/signuporlogin.page';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {

  stepIndex = 0
  data = [
    { img: "assets/image/walkthrough1.png", title: "Post a request & find the right specialist", subtitle: "Choose from the hand-picked talent on Profi, or post a request to attract the right person for the job." },
    { img: "assets/image/walkthrough2.png", title: "Agree to terms and get to work", subtitle: "Choose the right Specialist by their reviews, photos, and rating. Until you and your specialist have agreed on a request." },
    { img: "assets/image/walkthrough3.png", title: "A job well done!", subtitle: "Mark the job as complete and don't forget to leave a rating and review. It will help a lot with the community." }
  ]
  constructor(private navCtl: NavController) { }

  ngOnInit() {


  }

  nextthrough() {
    this.stepIndex++
    if (this.stepIndex > 2)
      this.stepIndex = 2
  }

  prevthrough() {
    this.stepIndex--
    if (this.stepIndex < 0)
      this.stepIndex = 0
  }

}
