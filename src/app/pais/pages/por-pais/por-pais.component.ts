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
  paisesSugeridos: CountryPais[] = [];
  mostrarSugerencia: boolean = false

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
      });
  }

  sugerencias(termino: string) {
    if (termino == '') {
      this.mostrarSugerencia = false
    }else{
      this.mostrarSugerencia = true
    }
    this.hayError = false
    this.termino = termino
    



    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5), (err) => this.paisesSugeridos = [])
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);

  }

}
