import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from "../../models/task.model";
import {TaskService} from "../../services/task.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  constructor(private taskservice: TaskService) {
  }


  task: Task = {
    label: '',
    complete: false
  };
  submitted = false;
  private saveSubscriptions?: Subscription;

  ngOnInit(): void {
  }


  saveTask(): void {
    const data = {
      label: this.task.label,
      complete: this.task.complete
    };
    if (data.label !== "") {
      this.saveSubscriptions = this.taskservice.create(data)
        .subscribe(
          value => {
            this.submitted = true;
          });
    } else {
      alert("Required Field");
    }
  }


  newTask(): void {
    this.submitted = false;
    this.task = {
      label: '',
      complete: false
    };
  }

  ngOnDestroy(): void {
    if (this.saveSubscriptions) {
      this.saveSubscriptions.unsubscribe();
    }
  }

}
