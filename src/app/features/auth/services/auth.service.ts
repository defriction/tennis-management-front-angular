import { Injectable, signal, computed } from '@angular/core';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'score_reporter' | 'guest';
}

interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    role?: 'admin' | 'score_reporter' | 'guest';
}

interface AuthResponse {
    success: boolean;
    message?: string;
    user?: User;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Signals for reactive state management
    private currentUserSignal = signal<User | null>(null);
    private isAuthenticatedSignal = signal<boolean>(false);

    // Public readonly signals
    public currentUser = this.currentUserSignal.asReadonly();
    public isAuthenticated = this.isAuthenticatedSignal.asReadonly();

    // Computed signals
    public userRole = computed(() => this.currentUserSignal()?.role ?? null);
    public userName = computed(() => this.currentUserSignal()?.name ?? '');
    public userEmail = computed(() => this.currentUserSignal()?.email ?? '');

    constructor() {
        // Check for existing session on init
        this.checkExistingSession();
    }

    private checkExistingSession() {
        const token = localStorage.getItem('auth_token');
        const userStr = localStorage.getItem('current_user');

        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                this.currentUserSignal.set(user);
                this.isAuthenticatedSignal.set(true);
            } catch (e) {
                this.logout();
            }
        }
    }

    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock validation
        if (credentials.email && credentials.password) {
            const user: User = {
                id: 1,
                name: 'Usuario Demo',
                email: credentials.email,
                role: 'admin'
            };

            // Store session
            const token = 'mock_token_' + Date.now();
            localStorage.setItem('auth_token', token);
            localStorage.setItem('current_user', JSON.stringify(user));

            if (credentials.rememberMe) {
                localStorage.setItem('remember_me', 'true');
            }

            // Update signals
            this.currentUserSignal.set(user);
            this.isAuthenticatedSignal.set(true);

            return { success: true, user };
        } else {
            return {
                success: false,
                message: 'Credenciales inválidas'
            };
        }
    }

    async register(data: RegisterData): Promise<AuthResponse> {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock validation
        if (data.email && data.password && data.name) {
            const user: User = {
                id: Date.now(),
                name: data.name,
                email: data.email,
                role: data.role || 'guest'
            };

            // Auto login after registration
            const token = 'mock_token_' + Date.now();
            localStorage.setItem('auth_token', token);
            localStorage.setItem('current_user', JSON.stringify(user));

            // Update signals
            this.currentUserSignal.set(user);
            this.isAuthenticatedSignal.set(true);

            return { success: true, user };
        } else {
            return {
                success: false,
                message: 'Por favor completa todos los campos'
            };
        }
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('current_user');
        localStorage.removeItem('remember_me');

        // Update signals
        this.currentUserSignal.set(null);
        this.isAuthenticatedSignal.set(false);
    }

    // Helper methods for backward compatibility
    getCurrentUser(): User | null {
        return this.currentUserSignal();
    }

    isUserAuthenticated(): boolean {
        return this.isAuthenticatedSignal();
    }
}
