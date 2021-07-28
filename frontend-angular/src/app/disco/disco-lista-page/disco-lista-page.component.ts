import { Component, OnInit } from '@angular/core';
import { Disco } from '../../disco.model';
import { DiscosService } from '../../discos.service';

import { Router } from '@angular/router';

@Component({
  selector: 'disco-lista-page',
  templateUrl: './disco-lista-page.component.html',
  styleUrls: ['./disco-lista-page.component.css']
})
export class DiscoListaPageComponent implements OnInit {
  public lista: Disco[] = [];

  constructor(private service: DiscosService, private router: Router) {}

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

  public editar(id: number) {
    // routerLink="/edicao/{{ disco.id }}"
    this.router.navigateByUrl('/edicao/' + id);
  }
}
