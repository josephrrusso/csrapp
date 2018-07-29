
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {ProtectedPage} from '../../pages/protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {TasksService} from '../../providers/tasks-service';
import {TasksModel} from '../../models/tasks.model';

@IonicPage({ name: 'TasksPage', segment: 'tasks-page' })
@Component({
  selector: 'page-tasks-page',
  templateUrl: '../../pages/tasks/index.html',
})
export class TasksPage extends ProtectedPage {

  public tasks: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public tasksService: TasksService) {

    super(navCtrl, navParams, storage);

  }
  
  ionViewWillEnter() {
    this.tasksService.index()
      .then(tasks => this.tasks = tasks.data)
      .catch(e => console.log("View tasks error", e));
  }
  
  taskInfo(task: TasksModel) {
    this.navCtrl.push('TasksInfoPage', {task: task});
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }
}
