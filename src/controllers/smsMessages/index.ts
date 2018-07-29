
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {SmsMessagesService} from '../../providers/smsMessages-service';
import {SmsMessagesModel} from '../../models/smsMessages.model';

@IonicPage({ name: 'SmsMessages', segment: 'sms-messages' })
@Component({
  selector: 'page-smsMessages-page',
  templateUrl: '../../pages/smsMessages/index.html',
})
export class SmsMessagesPage extends ProtectedPage {

  public smsMessages: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public smsMessagesService: SmsMessagesService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.smsMessagesService.index()
      .then(smsMessages => this.smsMessages = smsMessages.data)
      .catch(e => console.log("View smsMessages error", e));
  }
  
  smsMessageInfo(smsMessage: SmsMessagesModel) {
    this.navCtrl.push('SmsMessagesInfoPage', {smsMessage: smsMessage});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
