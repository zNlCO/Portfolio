import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Portfolio',
    pathMatch: 'full'
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
