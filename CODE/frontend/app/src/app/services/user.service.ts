import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/Message';
import { Student } from '../models/Student';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:8080/students/';
  constructor(private client: HttpClient) {}

  addStudent(data: any): Observable<any> {
    return this.client.post(this.url, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getStudentByEmailAndPassword(data: any): Observable<any> {
    return this.client.post(this.url + 'login', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getAllStudents(): Observable<Student[]> {
    return this.client.get<Student[]>(this.url);
  }

  getStudentById(id: number): Observable<Student> {
    return this.client.get<Student>(this.url + id);
  }

  updateStudent(id: number, data: any): Observable<Student> {
    return this.client.patch<Student>(this.url + id, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteStudent(id: number): Observable<any> {
    return this.client.delete(this.url + id);
  }

  getAllMessages(): Observable<Message[]> {
    return this.client.get<Message[]>(this.url + 'messages');
  }

  sendMessage(
    sender: string,
    receiver: string,
    message: string
  ): Observable<any> {
    return this.client.post(
      this.url + 'messages',
      JSON.stringify({ sender, receiver, message }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
