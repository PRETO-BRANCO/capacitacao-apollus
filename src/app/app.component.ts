import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'capacitacao-apollus';
  public nome = 'Rodrigo';

  public idade = 24;

  public listaCards = [
    'Primeiro card',
    'Segundo card',
    'Terceiro card',
    'Quarto card',
    'Quinto card',
    'Sexto card',
    'Sétimo card'
  ];

  public cardInput = new FormControl('');

  public adicionarCard() {
    if (this.cardInput.value) {
      this.listaCards.push(this.cardInput.value);
      this.cardInput.reset();
    }
  }

  public onExcluir(textoCard: string) {
    this.listaCards = this.listaCards.filter(
      itemListaCards => itemListaCards != textoCard
    );
  }
}
