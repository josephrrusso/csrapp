
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../providers/forms-service';
import {FormsModel} from '../../models/forms.model';

@IonicPage({ name: 'FormsEdit', segment: 'forms-edit' })
@Component({
  selector: 'page-form-edit-page',
  templateUrl: '../../pages/forms/edit.html',
})
export class FormsEditPage extends ProtectedPage {

  private formData: FormGroup;
  private form: FormsModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public formsService: FormsService) {

    super(navCtrl, navParams, storage);

    this.form = navParams.get('form');


    this.formData = this.formBuilder.group({
         id: [this.form.id, Validators.required],
         active: [this.form.active, Validators.required],
         status: [this.form.status, Validators.required],
         created: [this.form.created, Validators.required],
         modified: [this.form.modified, Validators.required],
         created_epoch: [this.form.created_epoch, Validators.required],
         modified_epoch: [this.form.modified_epoch, Validators.required],
         notes: [this.form.notes, Validators.required],
         name: [this.form.name, Validators.required],
         description: [this.form.description, Validators.required],
         uri: [this.form.uri, Validators.required],
         map: [this.form.map, Validators.required],
         create_type: [this.form.create_type, Validators.required],
         organization_id: [this.form.organization_id, Validators.required],
         campaign_id: [this.form.campaign_id, Validators.required],
         model: [this.form.model, Validators.required],
         pipeline_stage_id: [this.form.pipeline_stage_id, Validators.required],
         is_default: [this.form.is_default, Validators.required],
         redirect: [this.form.redirect, Validators.required],
         confirmation: [this.form.confirmation, Validators.required],
         confirmation_type: [this.form.confirmation_type, Validators.required],
         json: [this.form.json, Validators.required],
         
    });
  }

  process() {

    let updatedForms = Object.assign(this.form, this.formData.value);

    this.formsService.edit(updatedForms)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add form error", e));
  }
}
