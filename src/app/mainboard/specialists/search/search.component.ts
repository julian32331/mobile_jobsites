import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  data = [
    { nm: 'Jane Cunningham', tl: 'House cleaning, Carpet repair...',
      des: ' I have been cleaning for decades and I know how to do it right! If there are specific details'
    },
    { nm: 'Jane test', tl: 'Company cleaning, Carpet repair...', 
      des: ' I have been cleaning for decades and I know how to do it right! If there are specific details'
    },
    { nm: 'Hellow test', tl: 'Hellow world...', 
      des: ' I have been cleaning for decades and I know how to do it right! If there are specific details'
    }
  ]

  constructor(private navCtl: NavController) { }

  ngOnInit() {
    
  }



  getItems(ev: any){
    let val = ev.target.value
    if (val) {
      this.data = this.data.filter((item) => {
        return ((item.nm.toLowerCase().indexOf(val.toLowerCase()) > -1) ||(item.tl.toLowerCase().indexOf(val.toLowerCase()) > -1)
        ||(item.des.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
    console.log(this.data)
  }

  specialProfile(){
    console.log('yes')
    this.navCtl.navigateRoot(['/mainboard/specialists/special-profile']);
  }

}
