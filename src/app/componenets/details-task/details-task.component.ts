import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/task.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent implements OnInit, OnDestroy {

  currentTask: Task = {
    label: '',
    complete: false
  };
  status: string = 'Not Completed';
  complete: any;

  private subscriptions?: Subscription;


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    // @ts-ignore
    this.subscriptions = this.getTask(this.route.snapshot.params['id']);
  }

  getTask(id: string): void {
    this.subscriptions =
      this.taskService.get(id)
        .subscribe(
          data => {
            this.currentTask = data;
          });
  }


  updateTask(): void {
    this.subscriptions = this.taskService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          this.currentTask.complete = response.complete
        });
  }

  toggleEditable(event: any) {
    if (event.target.checked) {
      this.complete = true;
    }
    else {
      this.complete = false
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }


}
