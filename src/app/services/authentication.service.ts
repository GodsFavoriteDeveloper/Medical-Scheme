import { Platform } from '@ionic/angular';
import { Activity } from './../models/activity.model';
import { Member } from './../models/member.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from } from 'rxjs';
import { tap, timeout, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'https://api.gems.gov.za';
  selectedMember: Member;
  token: string;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private httpNative: HTTP) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  checkToken() {
    this.storage.get('member').then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }


  login(username: string, password: string) {
    const body = {
        grant_type: 'password',
        username,
        password
      };

    let req = this.httpNative.post(`${this.url}/token`,
    body,
    {
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return from(req).pipe(
      timeout(5000),
      retry(3)
    );
  }

  async getSelectedMember() {
    let member = await this.storage.get('member');
    return member;
  }

  logout() {
    return this.storage.remove('member').then(() => {
      this.authenticationState.next(false);
      this.router.navigateByUrl('/onboard');
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getMemberFullProfile() {
    let req = this.httpNative.get(`${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}`,
    {},
    {
      'Authorization': `Bearer ${this.selectedMember.access_token}`
    });
    return from(req);
  }

  getMemberActivity(id, pageNumber = 1) {
    let req = this.httpNative.get(
      `${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}/activities?pageCount=5&pageNumber=${pageNumber}`,
      {},
      {
        'Authorization': `Bearer ${this.selectedMember.access_token}`
      }
      );
    return from(req);
  }

  getDayToDayBenefits() {
    let req = this.httpNative.get(`${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}/daytodayBenefit/`,
    {},
    {
      'Authorization': `Bearer ${this.selectedMember.access_token}`
    }
    );
    return from(req);
  }

  getAllDocuments() {
    let req = this.httpNative.get(`${this.url}/api/v1/BenefitDocuments/GetAllDocuments/${this.selectedMember.MemberGuid}`,
    {},
    {
      'Authorization': `Bearer ${this.selectedMember.access_token}`
    }
    );
    return from(req);
  }

  getDocumentFromServer() {

  }

  getClaims() {
    let req = this.httpNative.get(`${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}/claimStatements/`,
    {},
    {
      'Authorization': `Bearer ${this.selectedMember.access_token}`
    }
    );
    return from(req).pipe(
      timeout(10000)
    );
  }

}
