
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {TasksService} from '../../providers/tasks-service';
import {TasksModel} from '../../models/tasks.model';

@IonicPage()
@Component({
  selector: 'page-task-edit-page',
  templateUrl: '../../pages/tasks/edit.html',
})
export class TasksEditPage extends ProtectedPage {

  private taskData: FormGroup;
  private task: TasksModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public tasksService: TasksService) {

    super(navCtrl, navParams, storage);

    this.task = navParams.get('task');


    this.taskData = this.formBuilder.group({
         id: [this.task.id, Validators.required],
         active: [this.task.active, Validators.required],
         status: [this.task.status, Validators.required],
         created: [this.task.created, Validators.required],
         modified: [this.task.modified, Validators.required],
         created_epoch: [this.task.created_epoch, Validators.required],
         modified_epoch: [this.task.modified_epoch, Validators.required],
         owner: [this.task.owner, Validators.required],
         ownerg: [this.task.ownerg, Validators.required],
         organization_id: [this.task.organization_id, Validators.required],
         campaign_id: [this.task.campaign_id, Validators.required],
         user_id: [this.task.user_id, Validators.required],
         role_id: [this.task.role_id, Validators.required],
         name: [this.task.name, Validators.required],
         instructions: [this.task.instructions, Validators.required],
         link: [this.task.link, Validators.required],
         viewed: [this.task.viewed, Validators.required],
         sms_alert: [this.task.sms_alert, Validators.required],
         group_id: [this.task.group_id, Validators.required],
         description: [this.task.description, Validators.required],
         assignee_group_id: [this.task.assignee_group_id, Validators.required],
         assignment_group_id: [this.task.assignment_group_id, Validators.required],
         assignment_ticket_id: [this.task.assignment_ticket_id, Validators.required],
         assignment_location_id: [this.task.assignment_location_id, Validators.required],
         assignment_user_id: [this.task.assignment_user_id, Validators.required],
         
    });
  }

  process() {

    let updatedTasks = Object.assign(this.task, this.taskData.value);

    this.tasksService.edit(updatedTasks)
      .then(() => this.navCtrl.pop())
      .catch((e) => console.log("Add task error", e));
  }
}
