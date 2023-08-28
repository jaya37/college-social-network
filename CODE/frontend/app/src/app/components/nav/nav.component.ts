import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  @Input() admin: boolean = false;
  @Input() student: boolean = false;
  @Input() officer: boolean = false;
  @Input() main: boolean = false;
  @Input() placement: boolean = false;

  ngOnInit(): void {}
}
