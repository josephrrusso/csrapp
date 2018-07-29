
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TasksService} from '../../providers/tasks-service';
import {TasksModel} from '../../models/tasks.model';

@IonicPage()
@Component({
  selector: 'page-task-info-page',
  templateUrl: '../../pages/tasks/view.html',
})
export class TasksInfoPage extends ProtectedPage {

  private task: TasksModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public tasksService: TasksService) {

    super(navCtrl, navParams, storage);
    
    this.task = navParams.get('task');

  }
  
  editTasks(task: TasksModel) {
    this.navCtrl.push('TasksEditPage', {task: task});
  }
  
  deleteTasks(task: TasksModel) {
    this.tasksService.delete(task.id)
      .then(() => this.navCtrl.pop())
      .catch(e => console.log("Delete task error", e)); 
  }
}

