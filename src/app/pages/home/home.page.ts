import { Component, OnInit } from '@angular/core';
import { faCamera, faBaby, faFileContract, faCoins, faEye, faHandHoldingUsd, faSearchLocation, faHeartbeat, faUserTie, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  icons = {
    faCamera,
    faBaby,
    faFileContract,
    faCoins,
    faEye,
    faHandHoldingUsd,
    faSearchLocation,
    faHeartbeat,
    faUserTie,
    faPaperPlane
  };
  constructor() { }

  ngOnInit() {
  }

}