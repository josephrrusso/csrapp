
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {TicketsService} from '../../providers/tickets-service';

@IonicPage()
@Component({
  selector: 'page-ticket-add-page',
  templateUrl: '../../pages/tickets/add.html',
})
export class TicketsAddPage extends ProtectedPage {

  private ticketData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public ticketsService: TicketsService) {

    super(navCtrl, navParams, storage);

    this.ticketData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         campaign_id: ['', Validators.required],
         ticket_status_id: ['', Validators.required],
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         latitude: ['', Validators.required],
         longitude: ['', Validators.required],
         last_contacted: ['', Validators.required],
         polygons: ['', Validators.required],
         name: ['', Validators.required],
         
    });
  }

  process() {
    this.ticketsService.add(this.ticketData.value)
      .then(() => this.navCtrl.push('TicketsPage'))
      .catch((e) => console.log("Add ticket error", e));
  }
}
