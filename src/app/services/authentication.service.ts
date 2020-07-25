import { Activity } from './../models/activity.model';
import { Member } from './../models/member.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'https://api.gems.gov.za';
  selectedMember: Member;
  token: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<Member>(`${this.url}/token`,
    `grant_type=password&username=${username}&password=${password}&platform=Member Portal`
    );
  }

  getMemberFullProfile() {
    const options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.selectedMember.access_token}`)
    };
    return this.http.get<any>(`${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}`, options);
  }

  getMemberActivity(id, pageNumber = 1) {
    const options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.selectedMember.access_token}`)
    };
    return this.http.get<Activity[]>(
      `${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}/activities?pageCount=5&pageNumber=${pageNumber}`,
      options
      );
  }

  getDayToDayBenefits() {
    const options = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.selectedMember.access_token}`)
    };
    return this.http.get<any>(`${this.url}/api/v1/Members/${this.selectedMember.MemberGuid}/daytodayBenefit/`, options);
  }

}
