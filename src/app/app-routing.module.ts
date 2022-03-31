import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AddTaskPageModule } from './pages/add-task.page-module';
import { TaskListPageModule } from './pages/task-list.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'add-task',
    loadChildren: () => AddTaskPageModule,
  },
  {
    path: 'task-list',
    loadChildren: () => TaskListPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
