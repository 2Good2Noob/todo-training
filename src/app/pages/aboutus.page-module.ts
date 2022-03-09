import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutusPage } from './aboutus.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutusPage,
        }
      ])],
  	declarations: [AboutusPage],
  	providers: [],
  	exports: [] })
export class AboutusPageModule {
}
