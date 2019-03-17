import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, FacebookLoginProvider } from 'ng4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService, private router: Router) { }

  ngOnInit() { }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      console.log(user);
      this.user = user;
      this.router.navigate(['/user-profile']);
    });
  }
}
