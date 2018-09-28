import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  year = new Date().getFullYear();
  logo = require('../assets/logo.png');

  navigation = [
    { link: 'about', label: 'apptrans.menu.about' },
    { link: 'features', label: 'apptrans.menu.features' },
    { link: 'examples', label: 'apptrans.menu.examples' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'apptrans.menu.settings' }
  ];

  languages = ['en', 'de'];

  isAuthenticated: boolean = false;
  isHeaderSticky: boolean = true;

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }
}
