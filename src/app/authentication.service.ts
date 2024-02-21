import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private jwtHelper: JwtHelperService) {}
    // Method to check if the user is logged in
    isAuthenticated(): boolean {
      const token = localStorage.getItem('token');
      // Check whether the token is expired and return
      return !this.jwtHelper.isTokenExpired(token);
    }
  // Method to get the user ID from the token
  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken ? decodedToken.id : null;
    }
    return null;
  }
}
