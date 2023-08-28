import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liststudents',
  templateUrl: './liststudents.component.html',
  styleUrls: ['./liststudents.component.css'],
})
export class ListstudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.service.getAllStudents().subscribe((students) => {
      this.students = students;
    });
  }
}
