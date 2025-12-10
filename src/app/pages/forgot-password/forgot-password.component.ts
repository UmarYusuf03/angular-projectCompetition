import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  router = inject(Router);

  email: string = '';
  isSubmitted = false;
  isError = false;

  // ✅ THIS METHOD MUST EXIST
  onSubmit() {
    if (!this.email) {
      this.isError = true;
      this.isSubmitted = false;
      return;
    }

    // TODO: Replace with API call later
    this.isError = false;
    this.isSubmitted = true;
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }
}
