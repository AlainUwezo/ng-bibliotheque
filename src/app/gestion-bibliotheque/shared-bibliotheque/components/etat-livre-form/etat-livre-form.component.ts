import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtatLivre } from './../../../../core/model/livre/etat-livre.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-etat-livre-form',
  templateUrl: './etat-livre-form.component.html',
  styleUrls: ['./etat-livre-form.component.css']
})
export class EtatLivreFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, etat: EtatLivre, action: string}
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: [this.data.etat ? this.data.etat.libelle : '', [Validators.required, Validators.minLength(3)]]
    })
  }

}
