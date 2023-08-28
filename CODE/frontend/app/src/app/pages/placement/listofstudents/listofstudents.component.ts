import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listofstudents',
  templateUrl: './listofstudents.component.html',
  styleUrls: ['./listofstudents.component.css'],
})
export class ListofstudentsComponent implements OnInit {
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

  addToPlacement(student: Student): void {
    if (localStorage.getItem('placedStudents') != null) {
      const placedStudents: Student[] = JSON.parse(
        localStorage.getItem('placedStudents')!
      );
      if (placedStudents.indexOf(student) === -1) {
        placedStudents.push(student);
        localStorage.setItem('placedStudents', JSON.stringify(placedStudents));
      }
    } else {
      const placedStudents = [];
      placedStudents.push(student);
      localStorage.setItem('placedStudents', JSON.stringify(placedStudents));
    }
  }
}
