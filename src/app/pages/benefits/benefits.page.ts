import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
})
export class BenefitsPage implements OnInit {
  benefits;
  loader;

  constructor(private api: AuthenticationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadBenefits();
  }

  loadBenefits() {
    this.showLoader();
    this.api.getBenefits().subscribe(benefits => {
      this.benefits = JSON.parse(benefits.data);
      console.log(this.benefits);
      this.loader.dismiss();
    }, error => {
      console.log(error);
      this.loader.dismiss();
    });
  }

  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      spinner: 'circles'
    })
    this.loader.present();
  }


}
