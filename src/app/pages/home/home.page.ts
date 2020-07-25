import { Member } from './../../models/member.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faCamera, faBaby, faHandshake, faFileContract, faCoins, faEye, faHandHoldingUsd, faSearchLocation, faHeartbeat, faUserTie, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  member: Member;
  icons = {
    faCamera,
    faBaby,
    faFileContract,
    faCoins,
    faEye,
    faHandshake,
    faHandHoldingUsd,
    faSearchLocation,
    faHeartbeat,
    faUserTie,
    faPaperPlane
  };
  constructor(private auth: AuthenticationService) {
    this.member = this.auth.selectedMember;
  }

  ngOnInit() {
  }

  takeAssessment() {
    window.open('https://covid19.gems.gov.za', '_blank');
  }

}
