
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {TicketsService} from '../../providers/tickets-service';
import {TicketsModel} from '../../models/tickets.model';

@IonicPage()
@Component({
  selector: 'page-ticket-edit-page',
  templateUrl: '../../pages/tickets/edit.html',
})
export class TicketsEditPage extends ProtectedPage {

  private ticketData: FormGroup;
  private ticket: TicketsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public ticketsService: TicketsService) {

    super(navCtrl, navParams, storage);

    this.ticket = navParams.get('ticket');


    this.ticketData = this.formBuilder.group({
         id: [this.ticket.id, Validators.required],
         active: [this.ticket.active, Validators.required],
         status: [this.ticket.status, Validators.required],
         created: [this.ticket.created, Validators.required],
         modified: [this.ticket.modified, Validators.required],
         created_epoch: [this.ticket.created_epoch, Validators.required],
         modified_epoch: [this.ticket.modified_epoch, Validators.required],
         owner: [this.ticket.owner, Validators.required],
         ownerg: [this.ticket.ownerg, Validators.required],
         campaign_id: [this.ticket.campaign_id, Validators.required],
         ticket_status_id: [this.ticket.ticket_status_id, Validators.required],
         first_name: [this.ticket.first_name, Validators.required],
         last_name: [this.ticket.last_name, Validators.required],
         latitude: [this.ticket.latitude, Validators.required],
         longitude: [this.ticket.longitude, Validators.required],
         last_contacted: [this.ticket.last_contacted, Validators.required],
         polygons: [this.ticket.polygons, Validators.required],
         name: [this.ticket.name, Validators.required],
         
    });
  }

  process() {

    let updatedTickets = Object.assign(this.ticket, this.ticketData.value);

    this.ticketsService.edit(updatedTickets)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add ticket error", e));
  }
}
