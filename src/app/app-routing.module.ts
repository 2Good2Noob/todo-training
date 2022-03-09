import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { HomePageModule } from './pages/home.page-module';
import { AboutusPageModule } from './pages/aboutus.page-module';

const routes: Routes = [{ 
        path: 'about-us', 
        loadChildren: () => AboutusPageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
