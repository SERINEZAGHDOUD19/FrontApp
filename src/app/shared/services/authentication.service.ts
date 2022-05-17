import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private host: string = 'http://localhost:8080';
  private jwt: string = '';
  private jwToken: any;
  private roles: any = [];
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(this.host + '/login', user, { observe: 'response' });
  }
  saveToken(jwt: any) {
    this.jwToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwToken);

    localStorage.setItem('ROLE', this.roles.groups[0].authority);
  }
  loadToken() {
    this.jwToken = localStorage.getItem('token');
  }
  getGroups() {
    if (this.jwToken == null) {
      this.loadToken();
    }
    console.log('jwt pour get' + this.jwToken);
    return this.http.get(this.host + '/group/groups', {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
  getUsersByType(type: any) {
    if (this.jwToken == null) {
      this.loadToken();
    }
    console.log('getUsersByType' + this.jwToken);
    return this.http.get(this.host + '/user/users/' + type, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
  getUsers() {
    if (this.jwToken == null) {
      this.loadToken();
    }
    console.log('jwt pour get' + this.jwToken);
    return this.http.get(this.host + '/user/users', {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
  logout() {
    this.jwToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('ROLE');
  }
  GetRole() {
    if (this.jwToken == null) {
      this.loadToken();
    }
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwToken);
    return this.roles.groups[0].authority;
  }
  saveGroup(group: any) {
    let headers = new HttpHeaders();
    headers.append('Authorization', this.jwToken);
    return this.http.post(this.host + '/api/group', group, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
  getJwtToken() {
    return localStorage.getItem('token');
  }

  saveUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Authorization', this.jwToken);
    return this.http.post(this.host + '/user', user, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
  addUserToGroupe(username: any, role: any) {
    let headers = new HttpHeaders();
    headers.append('Authorization', this.jwToken);
    return this.http.post(
      this.host + '/group/addRoleToUser/' + username + '/' + role,
      {
        headers: new HttpHeaders({ Authorization: this.jwToken }),
      }
    );
  }
}
