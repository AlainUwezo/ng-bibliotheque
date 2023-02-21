import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categorie } from './../../../../core/model/livre/categorie.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, categorie: Categorie, action: string}
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: [this.data.categorie ? this.data.categorie.libelle : '', [Validators.required, Validators.minLength(3)]]
    })
  }

}
