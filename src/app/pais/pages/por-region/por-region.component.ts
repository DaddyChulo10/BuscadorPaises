import { Component } from '@angular/core';
import { CountryPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `#id {
      margin-right: 5px;
      margin-top: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',]
  regionActiva: string = ''
  paises: CountryPais[] = []



  constructor(private paisService: PaisService) { }


  getClaseCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-dark' : 'btn btn-outline-dark'
  }
  activaRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region
    this.paises = []

    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);

  }


}
