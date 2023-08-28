import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-managestudents',
  templateUrl: './managestudents.component.html',
  styleUrls: ['./managestudents.component.css'],
})
export class ManagestudentsComponent implements OnInit {
  constructor(private service: UserService) {}

  students: Student[] = [];

  ngOnInit(): void {
    this.getAllStudents();
  }

  deleteStudent(id: number): void {
    this.service.deleteStudent(id).subscribe((data) => {
      this.getAllStudents();
    });
  }

  updateStudent(student: Student): void {
    student.approved = true;
    this.service.updateStudent(student.id, student).subscribe((student) => {
      if (student.id) {
        this.getAllStudents();
      }
    });
  }

  getAllStudents(): void {
    this.service.getAllStudents().subscribe((students) => {
      if (students.length > 0) {
        this.students = students;
      }
    });
  }
}
