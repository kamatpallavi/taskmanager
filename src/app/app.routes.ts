import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { AddTask } from './add-task/add-task';
import { ViewTask } from './view-task/view-task';

export const routes: Routes = [
  {
    path: '',
    component: Register
  },

    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'add-task', component: AddTask },
    { path: 'view-tasks', component: ViewTask },
    
];