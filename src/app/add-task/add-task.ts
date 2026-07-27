import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {

  constructor(private taskService: TaskService) { }

  taskName = '';
  taskDate = '';

  addTask() {

    const userId = Number(localStorage.getItem('userId'));

    const task = {
    taskName: this.taskName,
    taskDate: this.taskDate,
     userId: Number(localStorage.getItem('userId'))
  };

    console.log(task);

    this.taskService.addTask(task).subscribe({

      next: (response) => {
        alert(response);

        // Optional: Clear the form after successful task creation
        this.taskName = '';
        this.taskDate = '';
      },

      error: (error) => {
        alert(error.error);
      }

    });

  }

}