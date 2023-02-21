import { Auteur } from './../../../../core/model/livre/auteur.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auteur-form',
  templateUrl: './auteur-form.component.html',
  styleUrls: ['./auteur-form.component.css']
})
export class AuteurFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, auteur: Auteur, action: string}
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nom: [this.data.auteur ? this.data.auteur.nom : '', [Validators.required, Validators.minLength(3)]],
      prenom: [this.data.auteur ? this.data.auteur.prenom : '', [Validators.required, Validators.minLength(3)]],
    })
  }

}
