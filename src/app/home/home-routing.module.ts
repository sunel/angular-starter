import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AsyncComponent } from './async/components/async.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'apptrans.menu.home' },
    children: [      
      {
        path: 'async',
        component: AsyncComponent,
        data: { title: 'anms.home.menu.async' }
      },
    ]
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
