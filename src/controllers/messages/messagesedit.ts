
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MessagesService} from '../../providers/messages-service';
import {MessagesModel} from '../../models/messages.model';

@IonicPage()
@Component({
  selector: 'page-message-edit-page',
  templateUrl: '../../pages/messages/edit.html',
})
export class MessagesEditPage extends ProtectedPage {

  private messageData: FormGroup;
  private message: MessagesModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public messagesService: MessagesService) {

    super(navCtrl, navParams, storage);

    this.message = navParams.get('message');


    this.messageData = this.formBuilder.group({
         id: [this.message.id, Validators.required],
         active: [this.message.active, Validators.required],
         status: [this.message.status, Validators.required],
         created: [this.message.created, Validators.required],
         modified: [this.message.modified, Validators.required],
         created_epoch: [this.message.created_epoch, Validators.required],
         modified_epoch: [this.message.modified_epoch, Validators.required],
         owner: [this.message.owner, Validators.required],
         ownerg: [this.message.ownerg, Validators.required],
         user_id: [this.message.user_id, Validators.required],
         organization_id: [this.message.organization_id, Validators.required],
         location_id: [this.message.location_id, Validators.required],
         ticket_id: [this.message.ticket_id, Validators.required],
         user_idr: [this.message.user_idr, Validators.required],
         organization_idr: [this.message.organization_idr, Validators.required],
         location_idr: [this.message.location_idr, Validators.required],
         ticket_idr: [this.message.ticket_idr, Validators.required],
         send_time: [this.message.send_time, Validators.required],
         message: [this.message.message, Validators.required],
         
    });
  }

  process() {

    let updatedMessages = Object.assign(this.message, this.messageData.value);

    this.messagesService.edit(updatedMessages)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add message error", e));
  }
}
