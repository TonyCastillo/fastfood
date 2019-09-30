import { Component, OnInit, ViewChild, AfterViewInit, Output } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

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
export class DashboardComponent {
  panelActive = false;
  paneles: panelInterface[] = [
    {
      id: 1,
      titulo: 'Plan de Negocio – Una mirada práctica',
      contenido: 'esto es mejorandonegocios 1',
      active: true,
    },
    {
      id: 2,
      titulo: '5 formas de abrir tu negocio',
      contenido: 'esto es mejor forma de tony 2',
      active: false
    },
    {
      id: 3,
      titulo: 'Posicionando tu marca en Paraguay',
      contenido: 'soy pesoca',
      active: false,
    },
    {
      id: 4,
      titulo: 'Grupos de estudio o grupos focales',
      contenido: 'soy pesoca',
      active: false,
    },
    {
      id: 5,
      titulo: 'Workshops',
      contenido: 'soy pesoca',
      active: false,
    }
    ,{
      id: 6,
      titulo: 'Gestión del conocimiento',
      contenido: 'soy pesoca',
      active: false,
    }
  ];

  public mostrar:string = '';
  public mostrar_btn:string = '';
  hacerToggle : boolean = false;
  public clickEvent(){
    this.hacerToggle =! this.hacerToggle;
    if(this.hacerToggle == true){
      this.mostrar = 'toggled';
      this.mostrar_btn = 'toggled';
    }else{
      this.mostrar = '';
      this.mostrar_btn = '';
    }
  }

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
