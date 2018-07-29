
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {SmsMessagesService} from '../../providers/smsMessages-service';

@IonicPage({ name: 'SmsMessagesAddPage', segment: 'sms-messages-add-page' })
@Component({
  selector: 'page-smsMessage-add-page',
  templateUrl: '../../pages/smsMessages/add.html',
})
export class SmsMessagesAddPage extends ProtectedPage {

  private smsMessageData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public smsMessagesService: SmsMessagesService) {

    super(navCtrl, navParams, storage);

    this.smsMessageData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         phone_number_id: ['', Validators.required],
         phone_number_idr: ['', Validators.required],
         send_time: ['', Validators.required],
         message: ['', Validators.required],
         
    });
  }

  process() {
    this.smsMessagesService.add(this.smsMessageData.value)
      .then(() => this.navCtrl.push('SmsMessagesPage'))
      .catch((e) => console.log("Add smsMessage error", e));
  }
}
