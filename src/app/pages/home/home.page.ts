import { Member } from './../../models/member.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faCamera, faBaby, faHandshake, faFileContract, faCoins, faEye, faHandHoldingUsd, faSearchLocation, faHeartbeat, faUserTie, faPaperPlane, faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  member;
  exploreOpt = {
    slidesPerView: 2.1,
    spaceBetween: 8
  }
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
    faPaperPlane,
    faHeadset
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
