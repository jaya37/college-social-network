import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterofficerComponent } from './pages/admin/registerofficer/registerofficer.component';
import { ApprovepostComponent } from './pages/admin/approvepost/approvepost.component';
import { ManageofficersComponent } from './pages/admin/manageofficers/manageofficers.component';
import { OfficerAddPostComponent } from './pages/officer/add-post/add-post.component';
import { ListstudentsComponent } from './pages/officer/liststudents/liststudents.component';
import { ChatComponent } from './pages/student/chat/chat.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlacementhomeComponent } from './pages/placement/placementhome/placementhome.component';
import { AdminHomeComponent } from './pages/admin/home/home.component';
import { ListofstudentsComponent } from './pages/placement/listofstudents/listofstudents.component';
import { ManagestudentsComponent } from './pages/admin/managestudents/managestudents.component';
import { OfficerdetailsComponent } from './components/officerdetails/officerdetails.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
import { AddPostComponent } from './pages/student/add-post/add-post.component';
import { StudentHomeComponent } from './pages/student/home/home.component';
import { PlacedStudentsComponent } from './components/placed-students/placed-students.component';
import { OfficerHomeComponent } from './pages/officer/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterofficerComponent,
    ApprovepostComponent,
    ManageofficersComponent,
    OfficerAddPostComponent,
    ListstudentsComponent,
    ChatComponent,
    NavComponent,
    LoginComponent,
    PlacementhomeComponent,
    AdminHomeComponent,
    ListofstudentsComponent,
    ManagestudentsComponent,
    OfficerdetailsComponent,
    PostdetailsComponent,
    AddPostComponent,
    StudentHomeComponent,
    PlacedStudentsComponent,
    OfficerAddPostComponent,
    OfficerHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
