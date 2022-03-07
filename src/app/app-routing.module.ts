import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
