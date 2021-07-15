import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() conteudo: string = '';
  @Output() excluir = new EventEmitter();

  public onClickBotao() {
    this.excluir.emit(this.conteudo);
  }

  constructor() {}

  ngOnInit(): void {}
}
