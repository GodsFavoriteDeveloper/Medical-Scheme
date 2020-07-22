import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [ContactPage],
  providers: [
    LaunchNavigator
  ]
})
export class ContactPageModule {}
