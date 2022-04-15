import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task.model";

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAll(params?: any): Observable<any> {
    return this.http.get(baseUrl + '/tasks', {params});
  }

  getAllCompletedTasks(params: any, complete: boolean): Observable<any> {
    return this.http.get(baseUrl + '/tasksComplete', {params});
  }

  get(id: any): Observable<Task> {
    return this.http.get(`${baseUrl + '/task'}/${id}`);
  }

  create(data: Task): Observable<Task> {
    return this.http.post(baseUrl + '/task', data);
  }

  update(id: number, data: any): Observable<Task> {
    return this.http.put(`${baseUrl + '/task'}/${id}`, data);
  }

}
