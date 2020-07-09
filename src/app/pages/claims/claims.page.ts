import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Claim } from 'src/app/models/claim.model';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnInit {
  claims: Claim[];
  faHandHoldingUsd = faHandHoldingUsd;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.data.getClaims());
    this.data.getClaims().subscribe(claims => {
      for (var claim of claims) {
        if (claim.status === 'pending') {
          claim.status_color = 'warning';
        } else if (claim.status === 'complete') {
          claim.status_color = 'success';
        } else if (claim.status === 'cancelled') {
          claim.status_color = 'danger';
        }

        console.log(claim.status);
      }
      this.claims = claims;
    })
  }

}
