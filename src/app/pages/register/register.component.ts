import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  showPassword: boolean = false;

  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    collegeName: '',
    role: 'Student',
  };

  http = inject(HttpClient);
  router = inject(Router);

  onRegister() {
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/register',
        this.registerObj
      )
      .subscribe((res: any) => {
        this.router.navigate(['/login']);
      });
  }
}
