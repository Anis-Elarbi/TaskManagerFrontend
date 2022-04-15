import { NgModule } from '@angular/core';
import {AddTaskComponent} from "./componenets/add-task/add-task.component";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {TasksComponent} from "./componenets/tasks/tasks.component";
import {DetailsTaskComponent} from "./componenets/details-task/details-task.component";



const routes: Routes = [
  {path : '', redirectTo : 'tasks', pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: DetailsTaskComponent },
  { path: 'add', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
