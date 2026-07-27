import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  addTask(task: any)
{
    return this.http.post(
    "https://localhost:7144/api/Task/add",
    task,
    { responseType: 'text' }
);
}



 viewTask()
{
    return this.http.get("https://localhost:7144/api/Task/view");
}


 deleteTask(taskId: number)
{
    return this.http.delete(`https://localhost:7144/api/Task/delete/${taskId}`);
}

}