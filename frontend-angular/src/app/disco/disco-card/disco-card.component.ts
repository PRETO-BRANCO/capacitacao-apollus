import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Disco } from '../../disco.model';

@Component({
  selector: 'disco-card',
  templateUrl: './disco-card.component.html',
  styleUrls: ['./disco-card.component.css']
})
export class DiscoCardComponent {
  @Input() disco: Disco;

  @Output() comprar = new EventEmitter<Disco>();
  @Output() editar = new EventEmitter<number>();

  constructor() {}

  public onClickComprar() {
    this.comprar.emit(this.disco);
  }

  public onClickEditar() {
    this.editar.emit(this.disco.id);
  }
}
