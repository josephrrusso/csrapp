
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../providers/users-service';

@IonicPage({ name: 'UsersAdd', segment: 'users-add' })
@Component({
  selector: 'page-user-add-page',
  templateUrl: '../../pages/users/add.html',
})
export class UsersAddPage extends ProtectedPage {

  private userData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public usersService: UsersService) {

    super(navCtrl, navParams, storage);

    this.userData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         email: ['', Validators.required],
         password: ['', Validators.required],
         passkey: ['', Validators.required],
         timeout: ['', Validators.required],
         username: ['', Validators.required],
         first_name: ['', Validators.required],
         last_name: ['', Validators.required],
         last_contacted: ['', Validators.required],
         latitude: ['', Validators.required],
         longitude: ['', Validators.required],
         ownerg: ['', Validators.required],
         polygons: ['', Validators.required],
         notification_sms: ['', Validators.required],
         name: ['', Validators.required],
         work_status: ['', Validators.required],
         
    });
  }

  process() {
    this.usersService.add(this.userData.value)
      .then(() => this.navCtrl.push('UsersPage'))
      .catch((e) => console.log("Add user error", e));
  }
}
