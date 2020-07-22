import { Component, OnInit } from '@angular/core';
import { faCamera, faBaby, faHandshake, faFileContract, faCoins, faEye, faHandHoldingUsd, faSearchLocation, faHeartbeat, faUserTie, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  news = false;
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
  constructor() {
    setTimeout(() => {
      this.news = true;
    }, 5000);
  }

  ngOnInit() {
  }

  takeAssessment() {
    window.open('https://covid19.gems.gov.za', '_blank');
  }

}
