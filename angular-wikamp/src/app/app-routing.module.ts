import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardLecturerComponent } from './components/board-lecturer/board-lecturer.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { CreateFacultyComponent } from './components/create-faculty/create-faculty.component';
import { UpdateFacultyComponent } from './components/update-faculty/update-faculty.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lecturer', component: BoardLecturerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component: CreateFacultyComponent },
  { path: 'update/:id', component: UpdateFacultyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
