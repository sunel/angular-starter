import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menus = [
    { link: 'async', label: 'apptrans.home.menu.stocks' }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
  }

}
