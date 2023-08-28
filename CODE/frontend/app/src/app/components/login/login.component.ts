import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficerService } from 'src/app/services/officer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isRegister: boolean = false;

  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  success: boolean = false;
  error: boolean = false;
  msg: string = '';

  officer: boolean = false;

  constructor(
    private studentService: UserService,
    private router: Router,
    private officerService: OfficerService
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (this.email === '' && this.password === '') {
      this.msg = 'Please enter email and password';
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      return;
    }
    if (this.email === 'officer@placement.com' && this.password === 'officer') {
      this.router.navigate(['/placement']);
    }
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      if (this.officer) {
        this.officerService
          .getOfficerByEmailAndPassword({
            email: this.email,
            password: this.password,
          })
          .subscribe((officer) => {
            if (officer.id) {
              localStorage.setItem('user', JSON.stringify(officer));
              this.router.navigate(['/officer']);
            } else {
              this.msg = officer.msg;
              this.error = true;
              setTimeout(() => {
                this.error = false;
              }, 3000);
            }
          });
      } else {
        this.studentService
          .getStudentByEmailAndPassword({
            email: this.email,
            password: this.password,
          })
          .subscribe((user) => {
            if (user.id) {
              localStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['/student']);
            } else {
              this.msg = user.msg;
              this.error = true;
              this.clear();
              setTimeout(() => {
                this.error = false;
              }, 3000);
            }
          });
      }
    }
  }

  register(): void {
    if (
      this.name === '' ||
      this.email === '' ||
      this.password === '' ||
      this.phone === ''
    ) {
      this.msg = 'Please enter all fields';
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
      return;
    }
    this.studentService
      .addStudent({
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
      })
      .subscribe((user) => {
        if (user.id) {
          this.success = true;
          this.clear();
          setTimeout(() => {
            this.success = false;
          }, 3000);
        } else {
          this.msg = user;
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      });
  }

  clear(): void {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
  }
}
