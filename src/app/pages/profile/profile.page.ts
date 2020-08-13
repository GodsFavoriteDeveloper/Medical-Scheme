import { Member } from './../../models/member.model';
import { Activity } from './../../models/activity.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = 'member';
  member;
  activity;
  dayToDayBenefits;
  MemberImage;
  selectedMember;
  profile;
  benefit;
  documents;
  slideOpt = {
    slidesPerView: 3,
    spaceBetween: 10
  };

  constructor(private auth: AuthenticationService) {
    this.member = this.auth.selectedMember;
  }

  ngOnInit() {
    this.getFullProfile();
    this.loadBenefits();
    this.getActivity();
    this.loadDocuments();
  }

  segmentChanged(e) {
    console.log(e);
  }

  getFullProfile() {
    this.auth.getMemberFullProfile().subscribe(profile => {
      this.profile = JSON.parse(profile.data);
      this.MemberImage = `https://api.gems.gov.za/api/v1/MemberImage/${this.profile.BeneficiaryID}?counter=0`;
      console.log(profile);
    });
  }

  getActivity() {
    this.auth.getMemberActivity('1')
    .subscribe(res => {
      this.activity = JSON.parse(res.data);
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  loadBenefits() {
    this.auth.getDayToDayBenefits().subscribe(res => {
      this.dayToDayBenefits = JSON.parse(res.data);
      console.log(res);
    });
  }

  loadDocuments() {
    this.auth.getAllDocuments().subscribe(documents => {
      this.documents = JSON.parse(documents.data);
      console.log(this.documents);
    });
  }

  logout() {
    this.auth.logout();
  }

}
