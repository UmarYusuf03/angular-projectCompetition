import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPassword: boolean = false;
  loginObj: any = {
    email: '',
    password: '',
  };

  http = inject(HttpClient);

  onLogin() {
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/login',
        this.loginObj
      )
      .subscribe((res: any) => {
        alert('Student logged in.');
      });
  }
}
