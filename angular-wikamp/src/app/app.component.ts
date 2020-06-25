import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BNABD-angular-wikamp';

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showLecturerBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showLecturerBoard = this.roles.includes('ROLE_LECTURER');

      this.username = user.username;
    }

    //console.log(this.tokenStorageService.getToken());

  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
