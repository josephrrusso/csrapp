
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {TasksService} from '../../providers/tasks-service';

@IonicPage()
@Component({
  selector: 'page-task-add-page',
  templateUrl: '../../pages/tasks/add.html',
})
export class TasksAddPage extends ProtectedPage {

  private taskData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public tasksService: TasksService) {

    super(navCtrl, navParams, storage);

    this.taskData = this.formBuilder.group({
       id: ['', Validators.required],
         active: ['', Validators.required],
         status: ['', Validators.required],
         created: ['', Validators.required],
         modified: ['', Validators.required],
         created_epoch: ['', Validators.required],
         modified_epoch: ['', Validators.required],
         owner: ['', Validators.required],
         ownerg: ['', Validators.required],
         organization_id: ['', Validators.required],
         campaign_id: ['', Validators.required],
         user_id: ['', Validators.required],
         role_id: ['', Validators.required],
         name: ['', Validators.required],
         instructions: ['', Validators.required],
         link: ['', Validators.required],
         viewed: ['', Validators.required],
         sms_alert: ['', Validators.required],
         group_id: ['', Validators.required],
         description: ['', Validators.required],
         assignee_group_id: ['', Validators.required],
         assignment_group_id: ['', Validators.required],
         assignment_ticket_id: ['', Validators.required],
         assignment_location_id: ['', Validators.required],
         assignment_user_id: ['', Validators.required],
         
    });
  }

  process() {
    this.tasksService.add(this.taskData.value)
      .then(() => this.navCtrl.push('TasksPage'))
      .catch((e) => console.log("Add task error", e));
  }
}
