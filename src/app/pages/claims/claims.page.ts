import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-claims',
  templateUrl: './claims.page.html',
  styleUrls: ['./claims.page.scss'],
})
export class ClaimsPage implements OnInit {
  claims;
  loader;
  claimState = 'history';
  benefits;
  statements;

  constructor(private api: AuthenticationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadClaims();
  }

  loadClaims() {
    this.showLoader();
    this.api.getClaims().subscribe(claims => {
      this.claims = JSON.parse(claims.data);
      console.log(this.claims);
      this.loader.dismiss();
    }, error => {
      console.log(error)
      this.loader.dismiss();
    });
  }

  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      spinner: 'circles'
    })
    this.loader.present();
  }

  segmentChanged(e) {
    console.dir(e);
    this.claimState = e.detail.value;
  }

}
