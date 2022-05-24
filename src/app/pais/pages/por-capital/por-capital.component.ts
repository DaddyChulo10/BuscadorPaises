import { Component, OnInit } from '@angular/core';
import { CountryPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false
  interpais: CountryPais[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false
    this.termino = termino
    //console.log(this.termino)
    //Llama el servicio y se obtiene el subscribe, con el constructor
    this.paisService.buscarCapital(this.termino)
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


