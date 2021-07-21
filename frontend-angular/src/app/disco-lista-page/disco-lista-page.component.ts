import { Component, OnInit } from '@angular/core';
import { Disco } from '../disco.model';
import { DiscosService } from '../discos.service';

@Component({
  selector: 'disco-lista-page',
  templateUrl: './disco-lista-page.component.html',
  styleUrls: ['./disco-lista-page.component.css']
})
export class DiscoListaPageComponent implements OnInit {
  public lista: Disco[] = [];

  constructor(private service: DiscosService) {}

  ngOnInit(): void {
    this.service
      .listarDiscos()
      .subscribe(listaDiscos => (this.lista = listaDiscos));
  }

  public comprar(disco: Disco) {
    this.service.comprarDisco(disco).subscribe(resultado => {
      if (resultado) {
        alert('Compra realizada com sucesso');
      } else {
        alert('Erro ao comprar');
      }
    });
  }
}
