import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Claim } from 'src/app/models/claim.model';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
})
export class ClaimPage implements OnInit {
  claim: Claim;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let claimID = paramMap.get('claimID');
      console.log(claimID);
      this.data.getClaim(claimID).subscribe(claim => {
        this.claim = claim;
        console.log(claim);
      })
    })
  }

}
