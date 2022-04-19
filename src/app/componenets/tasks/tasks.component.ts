import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/task.model";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tasks: Task[] = [];
  private subscriptions?: Subscription;

  constructor(private taskService: TaskService, private router: Router) {
  }


  ngOnInit(): void {
    this.retrieveTasks();
  }

  getRequestParams(page: any, pageSize: any): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (page) {
      // @ts-ignore
      params[`page`] = page - 1;
    }

    if (pageSize) {
      // @ts-ignore
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveTasks(): void {
    const params = this.getRequestParams(this.page, this.tableSize);
    this.subscriptions = this.taskService.getAll(params)
      .subscribe(
        response => {
          this.tasks = response['content'];
          this.count = response['totalElements'];
        });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.retrieveTasks();
  }

  details(id: any) {
    this.router.navigate(['/tasks/', id])
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }


}
