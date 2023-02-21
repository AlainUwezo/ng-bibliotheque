import { Categorie } from './../../../core/model/livre/categorie.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorieCheck'
})
export class CategorieCheckPipe implements PipeTransform {

  transform(categories: Categorie[], searchName: string): any {
    if(searchName == ""){
      return categories;
    }
    const filterValue = searchName.toLowerCase();

    return categories.filter(option => option.libelle.toLowerCase().includes(filterValue));
    return categories;
  }

}
