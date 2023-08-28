import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovepostComponent } from './pages/admin/approvepost/approvepost.component';
import { RegisterofficerComponent } from './pages/admin/registerofficer/registerofficer.component';
import { AdminHomeComponent } from './pages/admin/home/home.component';
import { HomeComponent } from './pages/home/home.component';
import { OfficerHomeComponent } from './pages/officer/home/home.component';
import { OfficerAddPostComponent } from './pages/officer/add-post/add-post.component';
import { ListstudentsComponent } from './pages/officer/liststudents/liststudents.component';
import { StudentHomeComponent } from './pages/student/home/home.component';
import { AddPostComponent } from './pages/student/add-post/add-post.component';
import { ChatComponent } from './pages/student/chat/chat.component';
import { PlacementhomeComponent } from './pages/placement/placementhome/placementhome.component';
import { ManagestudentsComponent } from './pages/admin/managestudents/managestudents.component';
import { ManageofficersComponent } from './pages/admin/manageofficers/manageofficers.component';
import { ListofstudentsComponent } from './pages/placement/listofstudents/listofstudents.component';
import { PlacedStudentsComponent } from './components/placed-students/placed-students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent },
  {
    path: 'admin',
    children: [
      { path: 'regOfficer', component: RegisterofficerComponent },
      { path: 'manageStudents', component: ManagestudentsComponent },
      { path: 'manageOfficers', component: ManageofficersComponent },
      { path: 'approvePosts', component: ApprovepostComponent },
    ],
  },
  { path: 'officer', component: OfficerHomeComponent },
  {
    path: 'officer',
    children: [
      { path: 'addPost', component: OfficerAddPostComponent },
      { path: 'listStudents', component: ListstudentsComponent },
    ],
  },
  { path: 'student', component: StudentHomeComponent },
  {
    path: 'student',
    children: [
      { path: 'addPost', component: AddPostComponent },
      { path: 'chat', component: ChatComponent },
    ],
  },
  { path: 'placement', component: PlacementhomeComponent },
  {
    path: 'placement',
    children: [
      { path: 'listStudents', component: ListofstudentsComponent },
      { path: 'placedStudents', component: PlacedStudentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
