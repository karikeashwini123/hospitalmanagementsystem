import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"aboutus", component: AboutusComponent},
  
  {path:"contactus", component: ContactusComponent},
  {path:"images", component: ImagesComponent},
  {path:"login", component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
