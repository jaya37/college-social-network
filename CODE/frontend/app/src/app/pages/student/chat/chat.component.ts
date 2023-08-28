import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { Student } from 'src/app/models/Student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  allMessages: Message[] = [];

  sender: string = '';

  students: Student[] = [];

  sentMessages: string[] = [];
  receivedMessages: string[] = [];

  chatStudent: string = '';
  message: string = '';

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.sender = JSON.parse(localStorage.getItem('user')!).name;
    this.getAllStudents();
    this.getAllMessages();
  }

  getAllStudents(): void {
    this.service.getAllStudents().subscribe((students) => {
      students.forEach((student) => {
        if (student.name !== this.sender) {
          this.students.push(student);
        }
      });
    });
  }

  getAllMessages(): void {
    this.service.getAllMessages().subscribe((messages) => {
      this.allMessages = messages;
    });
  }

  setChat(student: string): void {
    this.chatStudent = student;
    this.allMessages.forEach((message) => {
      if (
        (message.sender === this.sender && message.receiver === student) ||
        (message.sender === student && message.receiver === this.sender)
      ) {
        if (message.sender === this.sender) {
          this.sentMessages.push(message.message);
        } else {
          this.receivedMessages.push(message.message);
        }
      }
    });
  }

  sendMessage(): void {
    this.service
      .sendMessage(this.sender, this.chatStudent, this.message)
      .subscribe((res) => {
        console.log(res);
        if (res.msg) {
          this.sentMessages.push(this.message);
          this.message = '';
        }
      });
  }
}
