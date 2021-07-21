import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BandasService } from '../bandas.service';

import { FormGroup } from '@angular/forms';
import { Disco } from '../disco.model';
import { Banda } from '../banda.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'disco-form',
  templateUrl: './disco-form.component.html',
  styleUrls: ['./disco-form.component.css']
})
export class DiscoFormComponent {
  @Input() form: FormGroup;

  @Output() submit = new EventEmitter<Disco>();

  public banda$: Observable<Banda[]>;

  constructor(private bandaService: BandasService) {
    this.banda$ = bandaService.listarBandas();
  }

  public submitForm() {
    if (!this.form.valid) {
      alert('form inválido. preencha corretamente');
      return;
    }

    this.submit.emit(this.form.value);
  }
}
