
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {MessagesService} from '../../providers/messages-service';
import {MessagesModel} from '../../models/messages.model';

@IonicPage({ segment: 'messages-info-page' })
@Component({
  selector: 'page-message-info-page',
  templateUrl: '../../pages/messages/view.html',
})
export class MessagesInfoPage extends ProtectedPage {

  private message: MessagesModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public messagesService: MessagesService) {

    super(navCtrl, navParams, storage);
    
    this.message = navParams.get('message');

  }
  
  editMessages(message: MessagesModel) {
    this.navCtrl.push('MessagesEditPage', {message: message});
  }
  
  deleteMessages(message: MessagesModel) {
    this.messagesService.delete(message.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete message error", e)); 
  }
}

