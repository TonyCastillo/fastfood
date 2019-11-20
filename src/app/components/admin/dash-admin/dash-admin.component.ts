import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.scss']
})
export class DashAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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

}
