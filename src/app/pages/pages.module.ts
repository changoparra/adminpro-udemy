import { NgModule } from '@angular/core';

import { PAGES_ROUTE } from './pages.routes';
import { ShadedModule } from '../shared/shaded.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports:[    
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
  imports: [
      ShadedModule,
      PAGES_ROUTE
],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
