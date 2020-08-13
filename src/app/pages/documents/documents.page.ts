import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  documents;
  loader;

  constructor(private auth: AuthenticationService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this.showLoader();
    this.auth.getAllDocuments().subscribe(docs => {
      this.documents = JSON.parse(docs.data);
      console.log(this.documents);
      this.loader.dismiss();
    }, error => {
      this.loader.dismiss();
    });
  }

  openDoc(doc: string) {

  }

  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: true
    });
    this.loader.present();
  }

}
