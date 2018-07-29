
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UserTicketsService} from '../../providers/userTickets-service';

@IonicPage({ name: 'UserTicketsAddPage', segment: 'user-tickets-add-page' })
@Component({
  selector: 'page-userTicket-add-page',
  templateUrl: '../../pages/userTickets/add.html',
})
export class UserTicketsAddPage extends ProtectedPage {

  private userTicketData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public userTicketsService: UserTicketsService) {

    super(navCtrl, navParams, storage);

    this.userTicketData = this.formBuilder.group({
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
         ticket_id: ['', Validators.required],
         
    });
  }

  process() {
    this.userTicketsService.add(this.userTicketData.value)
      .then(() => this.navCtrl.push('UserTicketsPage'))
      .catch((e) => console.log("Add userTicket error", e));
  }
}
