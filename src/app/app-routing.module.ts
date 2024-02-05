import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : '' , redirectTo : 'home' , pathMatch :'full'},
  {path : 'home' , component : HomeComponent , title:'Home'},
  {path : 'about' , component : AboutComponent ,title:'About'},
  {path : 'contact' , component : ContactComponent,title:'Contact'},
  {path : 'portfolio' , component : PortfolioComponent ,title:'Portfolio'},
  {path : '**' , component : NotFoundComponent , title:'Not Found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes  , {useHash:true,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
