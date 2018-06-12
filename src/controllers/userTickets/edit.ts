
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UserTicketsService} from '../../providers/userTickets-service';
import {UserTicketsModel} from '../../models/userTickets.model';

@IonicPage()
@Component({
  selector: 'page-userTicket-edit-page',
  templateUrl: '../../pages/userTickets/edit.html',
})
export class UserTicketsEditPage extends ProtectedPage {

  private userTicketData: FormGroup;
  private userTicket: UserTicketsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public userTicketsService: UserTicketsService) {

    super(navCtrl, navParams, storage);

    this.userTicket = navParams.get('userTicket');


    this.userTicketData = this.formBuilder.group({
         id: [this.userTicket.id, Validators.required],
         active: [this.userTicket.active, Validators.required],
         status: [this.userTicket.status, Validators.required],
         created: [this.userTicket.created, Validators.required],
         modified: [this.userTicket.modified, Validators.required],
         created_epoch: [this.userTicket.created_epoch, Validators.required],
         modified_epoch: [this.userTicket.modified_epoch, Validators.required],
         owner: [this.userTicket.owner, Validators.required],
         ownerg: [this.userTicket.ownerg, Validators.required],
         user_id: [this.userTicket.user_id, Validators.required],
         ticket_id: [this.userTicket.ticket_id, Validators.required],
         
    });
  }

  process() {

    let updatedUserTickets = Object.assign(this.userTicket, this.userTicketData.value);

    this.userTicketsService.edit(updatedUserTickets)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add userTicket error", e));
  }
}
