
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../providers/forms-service';

@IonicPage()
@Component({
  selector: 'page-form-add-page',
  templateUrl: '../../pages/forms/add.html',
})
export class FormsAddPage extends ProtectedPage {

  private formData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public formsService: FormsService) {

    super(navCtrl, navParams, storage);

    this.formData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         notes: ['', Validators.required],
         name: ['', Validators.required],
         description: ['', Validators.required],
         uri: ['', Validators.required],
         map: ['', Validators.required],
         create_type: ['', Validators.required],
         organization_id: ['', Validators.required],
         campaign_id: ['', Validators.required],
         model: ['', Validators.required],
         pipeline_stage_id: ['', Validators.required],
         is_default: ['', Validators.required],
         redirect: ['', Validators.required],
         confirmation: ['', Validators.required],
         confirmation_type: ['', Validators.required],
         json: ['', Validators.required],
         
    });
  }

  process() {
    this.formsService.add(this.formData.value)
      .then(() => this.navCtrl.push('FormsPage'))
      .catch((e) => console.log("Add form error", e));
  }
}
