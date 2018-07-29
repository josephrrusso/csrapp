
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../providers/users-service';
import {UsersModel} from '../../models/users.model';

@IonicPage({ name: 'UsersEditPage', segment: 'users-edit-page' })
@Component({
  selector: 'page-user-edit-page',
  templateUrl: '../../pages/users/edit.html',
})
export class UsersEditPage extends ProtectedPage {

  private userData: FormGroup;
  private user: UsersModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);

    this.user = navParams.get('user');


    this.userData = this.formBuilder.group({
         id: [this.user.id, Validators.required],
         active: [this.user.active, Validators.required],
         status: [this.user.status, Validators.required],
         created: [this.user.created, Validators.required],
         modified: [this.user.modified, Validators.required],
         created_epoch: [this.user.created_epoch, Validators.required],
         modified_epoch: [this.user.modified_epoch, Validators.required],
         email: [this.user.email, Validators.required],
         password: [this.user.password, Validators.required],
         passkey: [this.user.passkey, Validators.required],
         timeout: [this.user.timeout, Validators.required],
         username: [this.user.username, Validators.required],
         first_name: [this.user.first_name, Validators.required],
         last_name: [this.user.last_name, Validators.required],
         last_contacted: [this.user.last_contacted, Validators.required],
         latitude: [this.user.latitude, Validators.required],
         longitude: [this.user.longitude, Validators.required],
         ownerg: [this.user.ownerg, Validators.required],
         polygons: [this.user.polygons, Validators.required],
         notification_sms: [this.user.notification_sms, Validators.required],
         name: [this.user.name, Validators.required],
         work_status: [this.user.work_status, Validators.required],
         
    });
  }

  process() {

    let updatedUsers = Object.assign(this.user, this.userData.value);

    this.usersService.edit(updatedUsers)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add user error", e));
  }
}
