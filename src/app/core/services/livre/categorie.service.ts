import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../../model/livre/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(): Observable<Array<Categorie>>{
    return this.http.get<Array<Categorie>>('http://localhost:3000/api/livres/categories')
        .pipe(map((data: Array<Categorie>)=> data));
  }
}
