import { Component, OnInit } from '@angular/core';

interface panelInterface {
  id: Number;
  titulo: String;
  contenido: String;
  active: Boolean
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  panelActive = false;
  paneles: panelInterface[] = [
    {
      id: 1,
      titulo: 'Mejorando negocios',
      contenido: 'esto es mejorandonegocios 1',
      active: true,
    },
    {
      id: 2,
      titulo: 'Mejor forma de tony',
      contenido: 'esto es mejor forma de tony 2',
      active: false
    },
    {
      id: 3,
      titulo: 'Te enseño a ser pesoca',
      contenido: 'soy pesoca',
      active: false,
    }
  ];
  constructor() { }

  close_panel_responsive(panel: panelInterface) {
    panel.active = false;
  }


  mostrar_close(panel: panelInterface) {
    this.paneles.forEach((item, i, arrays) => {
      item.active = false;
    });
    panel.active = true;

  }

}
