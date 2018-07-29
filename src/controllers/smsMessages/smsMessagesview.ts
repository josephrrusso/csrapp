
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {SmsMessagesService} from '../../providers/smsMessages-service';
import {SmsMessagesModel} from '../../models/smsMessages.model';

@IonicPage()
@Component({
  selector: 'page-smsMessage-info-page',
  templateUrl: '../../pages/smsMessages/view.html',
})
export class SmsMessagesInfoPage extends ProtectedPage {

  private smsMessage: SmsMessagesModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public smsMessagesService: SmsMessagesService) {

    super(navCtrl, navParams, storage);
    
    this.smsMessage = navParams.get('smsMessage');

  }
  
  editSmsMessages(smsMessage: SmsMessagesModel) {
    this.navCtrl.push('SmsMessagesEditPage', {smsMessage: smsMessage});
  }
  
  deleteSmsMessages(smsMessage: SmsMessagesModel) {
    this.smsMessagesService.delete(smsMessage.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete smsMessage error", e)); 
  }
}

