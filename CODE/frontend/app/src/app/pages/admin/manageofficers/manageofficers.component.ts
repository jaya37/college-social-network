import { Component, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-manageofficers',
  templateUrl: './manageofficers.component.html',
  styleUrls: ['./manageofficers.component.css'],
})
export class ManageofficersComponent implements OnInit {
  constructor(private service: OfficerService) {}

  officers: any = [];

  ngOnInit(): void {
    this.getAllOfficers();
  }

  deleteOfficer(officerId: number) {
    this.service.deleteOfficer(officerId).subscribe((data) => {
      this.getAllOfficers();
    });
  }

  getAllOfficers(): void {
    this.service.getAllOfficers().subscribe((officers) => {
      if (officers.length > 0) {
        this.officers = officers;
      }
    });
  }
}
