import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './componenets/add-task/add-task.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { TasksComponent } from './componenets/tasks/tasks.component';
import {NgxPaginationModule} from "ngx-pagination";
import { DetailsTaskComponent } from './componenets/details-task/details-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksComponent,
    DetailsTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
