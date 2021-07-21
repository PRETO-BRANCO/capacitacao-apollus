import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DiscosService } from '../discos.service';
import { Disco } from '../disco.model';

import { Validators } from '@angular/forms';

@Component({
  selector: 'disco-edicao-page',
  templateUrl: './disco-edicao-page.component.html',
  styleUrls: ['./disco-edicao-page.component.css']
})
export class DiscoEdicaoPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DiscosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarDisco(id).subscribe((disco: Disco) => {
      this.form = this.fb.group({
        nome: [disco.nome, [Validators.required]],
        banda: [disco.banda, [Validators.required]],
        ano: [
          disco.ano,
          [
            Validators.required,
            Validators.min(1920),
            Validators.max(new Date().getFullYear())
          ]
        ],
        imagem: [disco.imagem, [Validators.required]],
        preco: [disco.preco, [Validators.required, Validators.min(0.01)]],
        estoque: [disco.estoque, [Validators.required, Validators.min(0)]]
      });
    });
    // this.form.patchValue({ nome: 'Seventh Son of a Seventh Son' });
  }

  onSubmit(disco: Disco) {
    this.service.editarDisco(disco).subscribe(resultado => {
      console.log('disco', resultado, 'editado com sucesso');
    });
  }
}
