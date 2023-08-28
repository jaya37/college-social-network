import { Component, Input, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officerdetails',
  templateUrl: './officerdetails.component.html',
  styleUrls: ['./officerdetails.component.css'],
})
export class OfficerdetailsComponent implements OnInit {
  constructor(private officerService: OfficerService) {}

  officer: any = {};

  success: boolean = false;
  error: boolean = false;
  msg: string = '';

  @Input() update: boolean = false;

  ngOnInit(): void {}

  handleChange(e: any): void {
    this.officer.dept = e.target.value;
  }

  handleSubmit(): void {
    this.officerService.addOfficer(this.officer).subscribe((officer) => {
      if (officer.id) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
        this.officer = {};
      } else {
        this.error = true;
        setTimeout(() => {
          this.msg = officer.msg;
          this.error = false;
        }, 3000);
      }
    });
  }

  handleUpdate(): void {}
}
