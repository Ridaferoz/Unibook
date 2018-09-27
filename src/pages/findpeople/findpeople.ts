import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagerequestPage } from '../messagerequest/messagerequest';
import { FriendrequestPage } from '../friendrequest/friendrequest';
import { StdhomePage } from '../stdhome/stdhome';
import { NotificationPage } from '../notification/notification';




/**
 * Generated class for the FindpeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findpeople',
  templateUrl: 'findpeople.html',
})
export class FindpeoplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val'));
  }
  load(){
    this.navCtrl.push( MessagerequestPage,{
      val: 'hello'
    })
}
load2(){
  this.navCtrl.push( FriendrequestPage,{
    val: 'hello'
  })
}
load3(){
this.navCtrl.push( StdhomePage,{
  val: 'hello'
})
}

load6(){
  this.navCtrl.push(NotificationPage,{
    val: 'hello'
  })
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad FindpeoplePage');
  }

}