
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {FormsService} from '../../providers/forms-service';
import {FormsModel} from '../../models/forms.model';

@IonicPage({ name: 'FormsInfoPage', segment: 'forms-info-page' })
@Component({
  selector: 'page-form-info-page',
  templateUrl: '../../pages/forms/view.html',
})
export class FormsInfoPage extends ProtectedPage {

  private form: FormsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formsService: FormsService) {

    super(navCtrl, navParams, storage);
    
    this.form = navParams.get('form');

  }
  
  editForms(form: FormsModel) {
    this.navCtrl.push('FormsEditPage', {form: form});
  }
  
  deleteForms(form: FormsModel) {
    this.formsService.delete(form.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete form error", e)); 
  }
}

