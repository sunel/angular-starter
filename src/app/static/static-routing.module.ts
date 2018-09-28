import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'apptrans.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'apptrans.menu.features' }
  },
  {
    path: '404',
    component: NotfoundComponent,
    data: { title: 'apptrans.menu.404' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}