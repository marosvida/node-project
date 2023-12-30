// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isAuthenticated: boolean = false;
    private username: string = '';

    // Simulate login
    login(username: string): void {
        this.isAuthenticated = true;
        this.username = username;
    }

    // Simulate logout
    logout(): void {
        this.isAuthenticated = false;
        this.username = '';
    }

    // Check if user is authenticated
    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }

    // Get the username
    getUsername(): string {
        return this.username;
    }
}
