import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = 'member';
  member;
  activity;
  benefit;
  slideOpt = {
    slidesPerView: 3.5,
    spaceBetween: 10
  };

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(e) {
    console.log(e);
  }

}
