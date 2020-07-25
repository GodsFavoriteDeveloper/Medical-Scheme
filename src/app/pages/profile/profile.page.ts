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
  activity: Activity[];
  dayToDayBenefits;
  MemberImage;
  selectedMember: Member;
  profile;
  benefit;
  slideOpt = {
    slidesPerView: 3.5,
    spaceBetween: 10
  };

  constructor(private auth: AuthenticationService) {
    this.selectedMember = this.auth.selectedMember;
  }

  ngOnInit() {
    this.getFullProfile();
    this.getActivity();
    this.loadBenefits();
  }

  segmentChanged(e) {
    console.log(e);
  }

  getFullProfile() {
    this.auth.getMemberFullProfile().subscribe(profile => {
      this.profile = profile;
      this.MemberImage = `https://api.gems.gov.za/api/v1/MemberImage/${profile.BeneficiaryID}?counter=0`;
      console.log(profile);
    });
  }

  getActivity() {
    this.auth.getMemberActivity('1')
    .subscribe(res => {
      this.activity = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  loadBenefits() {
    this.auth.getDayToDayBenefits().subscribe(res => {
      this.dayToDayBenefits = res;
      console.log(res);
    });
  }

}
