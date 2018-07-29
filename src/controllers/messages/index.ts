
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {MessagesService} from '../../providers/messages-service';
import {MessagesModel} from '../../models/messages.model';

@IonicPage({ name: 'MessagesPage', segment: 'messages-page' })
@Component({
  selector: 'page-messages-page',
  templateUrl: '../../pages/messages/index.html',
})
export class MessagesPage extends ProtectedPage {

  public messages: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public messagesService: MessagesService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.messagesService.index()
      .then(messages => this.messages = messages.data)
      .catch(e => console.log("View messages error", e));
  }
  
  messageInfo(message: MessagesModel) {
    this.navCtrl.push('MessagesInfoPage', {message: message});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
