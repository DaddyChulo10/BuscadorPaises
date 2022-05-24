import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false
  interpais: CountryPais[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    //console.log(this.termino)
    //Llama el servicio y se obtiene el subscribe, con el constructor
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        //console.log(paises)
        this.interpais = paises

      }, (err) => {
        this.hayError = true
        this.interpais = []
      })
  }

  sugerencias( termino: string ) {
    this.hayError = false
    //Hay error
  }

}
