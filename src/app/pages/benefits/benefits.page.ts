import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
})
export class BenefitsPage implements OnInit {
  benefits;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }


}
