import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login-page',
    imports: [CommonModule, FormsModule, RouterLink, NgIconComponent],
    templateUrl: './login-page.html',
    styleUrl: './login-page.scss',
})
export class LoginPage {
    email: string = '';
    password: string = '';
    rememberMe: boolean = false;

    isLoading: boolean = false;
    errorMessage: string = '';
    showPassword: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    async onSubmit() {
        this.errorMessage = '';

        // Validation
        if (!this.email || !this.password) {
            this.errorMessage = 'Por favor completa todos los campos';
            return;
        }

        if (!this.isValidEmail(this.email)) {
            this.errorMessage = 'Por favor ingresa un email válido';
            return;
        }

        this.isLoading = true;

        try {
            const response = await this.authService.login({
                email: this.email,
                password: this.password,
                rememberMe: this.rememberMe
            });

            this.isLoading = false;

            if (response.success) {
                // Redirect to dashboard or home
                this.router.navigate(['/admin-tournament-scheduling']);
            } else {
                this.errorMessage = response.message || 'Error al iniciar sesión';
            }
        } catch (error) {
            this.isLoading = false;
            this.errorMessage = 'Error al conectar con el servidor';
        }
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
