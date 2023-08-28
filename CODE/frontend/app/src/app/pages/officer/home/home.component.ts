import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class OfficerHomeComponent implements OnInit {
  officer: any = {};
  constructor() {}

  ngOnInit(): void {
    this.officer = JSON.parse(localStorage.getItem('user')!);
  }
}
