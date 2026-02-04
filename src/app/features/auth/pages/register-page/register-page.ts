import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register-page',
    imports: [CommonModule, FormsModule, RouterLink, NgIconComponent],
    templateUrl: './register-page.html',
    styleUrl: './register-page.scss',
})
export class RegisterPage {
    name: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    acceptTerms: boolean = false;

    isLoading: boolean = false;
    errorMessage: string = '';
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    async onSubmit() {
        this.errorMessage = '';

        // Validation
        if (!this.name || !this.email || !this.password || !this.confirmPassword) {
            this.errorMessage = 'Por favor completa todos los campos';
            return;
        }

        if (!this.isValidEmail(this.email)) {
            this.errorMessage = 'Por favor ingresa un email válido';
            return;
        }

        if (this.password.length < 6) {
            this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Las contraseñas no coinciden';
            return;
        }

        if (!this.acceptTerms) {
            this.errorMessage = 'Debes aceptar los términos y condiciones';
            return;
        }

        this.isLoading = true;

        try {
            const response = await this.authService.register({
                name: this.name,
                email: this.email,
                password: this.password,
                role: 'guest' // Default role for new registrations
            });

            this.isLoading = false;

            if (response.success) {
                // Redirect to dashboard
                this.router.navigate(['/admin-tournament-scheduling']);
            } else {
                this.errorMessage = response.message || 'Error al registrarse';
            }
        } catch (error) {
            this.isLoading = false;
            this.errorMessage = 'Error al conectar con el servidor';
        }
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    toggleConfirmPasswordVisibility() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
