import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCategoriesComponent } from './components/table-categories/table-categories.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsCategoriesComponent } from './components/details-categories/details-categories.component';


@NgModule({
  declarations: [
    TableCategoriesComponent,
    CategoriesComponent,
    DetailsCategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class ListeCategoriesModule { }
