import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Disco } from '../disco.model';

@Component({
  selector: 'disco-card',
  templateUrl: './disco-card.component.html',
  styleUrls: ['./disco-card.component.css']
})
export class DiscoCardComponent {
  @Input() disco: Disco;

  @Output() comprar = new EventEmitter<Disco>();

  constructor() {}

  public onClickComprar() {
    this.comprar.emit(this.disco);
  }
}
