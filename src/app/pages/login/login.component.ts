// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { UserService } from '../../services/user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   showPassword: boolean = false;
//   loginObj: any = {
//     email: '',
//     password: '',
//   };

//   http = inject(HttpClient);
//   router = inject(Router);
//   userService = inject(UserService);

//   onLogin() {
//     const formValue = this.loginObj;

//     this.userService.onUserLogin(formValue).subscribe({
//       next: () => {
//         this.router.navigate(['/dashboard']);
//       },
//       error: () => {},
//     });
//   }
// }


import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  router = inject(Router);
  userService = inject(UserService);

  onLogin() {
    const formValue = this.loginObj;

    this.userService.onUserLogin(formValue).subscribe({
      next: (res: any) => {
        // 🔐 Store something that marks the user as logged in
        // If your API returns a real token, use that instead of 'true'
        // e.g. localStorage.setItem('auth_token', res.token);
        localStorage.setItem('auth_token', 'true');

        // ✅ Go to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed', err);
        // You can show an error message here later if you want
      },
    });
  }
}
