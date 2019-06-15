import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string;
  authJson: Object;

  constructor(
    public application: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    application.init().subscribe(() => {
      this.showVersion();
      this.initAuth();
    });
  }

  get ready(): boolean {
    return this.authJson !== undefined;
  }

  private initAuth(): object {
    //this.authService.get().subscribe(res => this.navJson = res, () => this.navJson = {});
    if (!environment.authenticated) {
      return this.authJson;
    }
    return this.authJson = {
      login: true,
      username: 'dev',
      role: 'admin',
      permission: {
        read: true,
        write: true,
        update: true,
        delete: true,
      }
    };

  }

  private showVersion() {
    if (environment.showVersion) {
      this.application.gitVersion().subscribe((version: string) => this.version = version);
    }
  }
}
