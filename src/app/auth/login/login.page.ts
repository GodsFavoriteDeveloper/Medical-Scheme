import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value.username);
    this.auth.login(form.value.username, form.value.password).subscribe(user => {
      console.log(user);
      this.auth.selectedMember = user;
      this.router.navigateByUrl('/tabs/tabs/home');
    }, error => {
      console.log(error);
    });
  }

}
