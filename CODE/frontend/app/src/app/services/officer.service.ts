import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  url = 'http://localhost:8080/officers/';
  constructor(private client: HttpClient) {}

  getOfficerByEmailAndPassword(officer: any): Observable<any> {
    return this.client.post(this.url + 'login', JSON.stringify(officer), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getAllOfficers(): Observable<any> {
    return this.client.get(this.url);
  }

  getOfficerById(id: number): Observable<any> {
    return this.client.get(this.url + id);
  }

  addOfficer(officer: any): Observable<any> {
    return this.client.post(this.url, JSON.stringify(officer), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  updateOfficer(officer: any): Observable<any> {
    return this.client.patch(this.url + officer.id, JSON.stringify(officer), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteOfficer(id: number): Observable<any> {
    return this.client.delete(this.url + id);
  }
}
