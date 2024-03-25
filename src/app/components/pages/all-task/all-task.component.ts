import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';


@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
  newTask = "";
  taskList: any[] = [];
  initialTaskList: any[] = [];
  httpService = inject(HttpService);
  ngOnInit() {
    this.getAllTasks()
  }
  addTask() {
    console.log("addTask", this.newTask);
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = "";
      this.getAllTasks()
      console.log("added");
    })
  }
  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.initialTaskList = this.taskList = result;

    })
  }
  onCompleted(task: any) {
    task.completed = true;
    console.log("complete", task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })

  }
  onImportant(task: any) {
    task.important = true;
    console.log("complete,task");
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    })
  }
}
