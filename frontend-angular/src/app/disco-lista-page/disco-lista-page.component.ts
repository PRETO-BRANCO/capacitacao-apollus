import { Component, OnInit } from '@angular/core';
import { Disco, Genero } from '../disco.model';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'disco-lista-page',
  templateUrl: './disco-lista-page.component.html',
  styleUrls: ['./disco-lista-page.component.css']
})
export class DiscoListaPageComponent implements OnInit {
  public lista$: Observable<Disco[]> = of([
    {
      nome: 'Number of the Beast',
      banda: 0,
      ano: 1982,
      genero: Genero.ROCK,
      imagem:
        'https://upload.wikimedia.org/wikipedia/pt/1/1f/Iron_Maiden_-_The_Number_Of_The_Beast.jpg',
      preco: 20,
      estoque: 5
    },
    {
      nome: 'Dois',
      banda: 1,
      ano: 1986,
      genero: Genero.ROCK,
      imagem:
        'https://upload.wikimedia.org/wikipedia/pt/7/72/Legi%C3%A3o_Urbana_-_Dois.jpg',
      preco: 30,
      estoque: 3
    },
    {
      nome: 'Lado B Lado A',
      banda: 2,
      ano: 1999,
      genero: Genero.ROCK,
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/LadoB-LadoA.jpg',
      preco: 15,
      estoque: 0
    }
  ]).pipe(delay(2000));

  public lista: Disco[] = [];

  constructor() {}

  ngOnInit(): void {
    this.lista$.subscribe(listaDiscos => (this.lista = listaDiscos));
  }

  public comprar(disco: Disco) {
    console.log(disco);
    of(true)
      .pipe(delay(2000))
      .subscribe(resultado => {
        if (resultado) {
          alert('Compra realizada com sucesso');
        } else {
          alert('Erro ao comprar');
        }
      });
  }
}
