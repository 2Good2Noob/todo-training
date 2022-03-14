import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from '../../../../../../../../../../../../../adapters/primary/ui/employees-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EmployeesListComponent],
  	providers: [],
  	exports: [EmployeesListComponent] })
export class EmployeesListComponentModule {
}
