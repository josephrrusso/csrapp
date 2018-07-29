
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {FormsService} from '../../providers/forms-service';
import {FormsModel} from '../../models/forms.model';

@IonicPage({ name: 'FormsPage', segment: 'forms-page' })
@Component({
  selector: 'page-forms-page',
  templateUrl: '../../pages/forms/index.html',
})
export class FormsPage extends ProtectedPage {

  public forms: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formsService: FormsService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.formsService.index()
      .then(forms => this.forms = forms.data)
      .catch(e => console.log("View forms error", e));
  }
  
  formInfo(form: FormsModel) {
    this.navCtrl.push('FormsInfoPage', {form: form});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
