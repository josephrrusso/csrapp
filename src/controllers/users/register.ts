import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';


@IonicPage({ name: 'UsersRegisterPage', segment: 'users-register-page' })
@Component({
  selector: 'page-register-page',
  templateUrl: '../../pages/users/register-page.html',
})
export class UsersRegisterPage {

  private regData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public authService: AuthService) {

    this.regData = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      active: 1,
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  /*
  register() {
    
    this.authService.register(this.regData.value)
      .then(() => this.navCtrl.setRoot('ProfilePage'))
      .catch(e => console.log("reg error", e));
  }
  */


  register() {
    //use this.loginData.value to authenticate the user
    this.authService.register(this.regData.value)
      .then(rs => {
        if (!rs.success) {
          //$("#accountregisterfailure").text("Account registration failed. Is there already an account associated with this email?");
          var number = document.getElementById("accountregisterfailure");
          number.innerHTML = "Account registration failed. Is there already an account associated with this email?";
        }
        else {
          this.storage.set("id_token", rs.data.token)
          .then(() => {
            this.storage.set("expiry", rs.exp)
            .then(() => {
              this.storage.set("user", rs.data.user)
              .then(() => {
                this.redirectToHome();
              })
              .catch(e => console.log('login error', e));
            })
            .catch(e => console.log('login error', e));
          })
          .catch(e => console.log('login error', e));
        }
      })
      .catch(e => console.log("login error", e));
  }


  redirectToHome() {
    this.navCtrl.setRoot('CampaignsPage');
    this.menuCtrl.enable(true);
  }

  backToLogin() {
    this.navCtrl.setRoot('LoginPage');
    //this.navCtrl.pop();
  }

}
