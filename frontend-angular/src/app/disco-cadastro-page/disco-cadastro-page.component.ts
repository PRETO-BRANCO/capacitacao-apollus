import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DiscosService } from '../discos.service';
import { Disco } from '../disco.model';

import { Validators } from '@angular/forms';

@Component({
  selector: 'disco-cadastro-page',
  templateUrl: './disco-cadastro-page.component.html',
  styleUrls: ['./disco-cadastro-page.component.css']
})
export class DiscoCadastroPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private service: DiscosService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      banda: ['', [Validators.required]],
      ano: [
        '',
        [
          Validators.required,
          Validators.min(1920),
          Validators.max(new Date().getFullYear())
        ]
      ],
      imagem: ['', [Validators.required]],
      preco: ['', [Validators.required, Validators.min(0.01)]],
      estoque: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(disco: Disco) {
    this.service.adicionarDisco(disco).subscribe(resultado => {
      console.log('disco', resultado, 'adicionado com sucesso');
    });
  }
}
