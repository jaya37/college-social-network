import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-placed-students',
  templateUrl: './placed-students.component.html',
  styleUrls: ['./placed-students.component.css'],
})
export class PlacedStudentsComponent implements OnInit {
  placedStudents: Student[] = [];
  constructor() {}

  ngOnInit(): void {
    this.placedStudents = JSON.parse(localStorage.getItem('placedStudents')!) || [];
  }
}
