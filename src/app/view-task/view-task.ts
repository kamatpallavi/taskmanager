import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task';

@Component({
  selector: 'app-view-task',
  imports: [CommonModule],
  templateUrl: './view-task.html',
  styleUrl: './view-task.css',
})
export class ViewTask implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService)
  {
  }

  ngOnInit(): void
  {
    this.taskService.viewTask().subscribe((response: any) => {
      this.tasks = response;
      console.log(this.tasks);
    });
  }

  deleteTask(taskId: number): void
  {
    this.taskService.deleteTask(taskId).subscribe({
      next: (response) =>
      {
        alert(response);

        // Refresh the task list after deletion
        this.taskService.viewTask().subscribe((response: any) => {
          this.tasks = response;
          console.log(this.tasks);
        });
      },

      error: (error) =>
      {
        alert(error.error);
      }
    });
  }
}