
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MessagesService} from '../../providers/messages-service';

@IonicPage({ segment: 'messages-add-page' })
@Component({
  selector: 'page-message-add-page',
  templateUrl: '../../pages/messages/add.html',
})
export class MessagesAddPage extends ProtectedPage {

  private messageData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public messagesService: MessagesService) {

    super(navCtrl, navParams, storage);

    this.messageData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         user_id: ['', Validators.required],
         organization_id: ['', Validators.required],
         location_id: ['', Validators.required],
         ticket_id: ['', Validators.required],
         user_idr: ['', Validators.required],
         organization_idr: ['', Validators.required],
         location_idr: ['', Validators.required],
         ticket_idr: ['', Validators.required],
         send_time: ['', Validators.required],
         message: ['', Validators.required],
         
    });
  }

  process() {
    this.messagesService.add(this.messageData.value)
      .then(() => this.navCtrl.push('MessagesPage'))
      .catch((e) => console.log("Add message error", e));
  }
}
