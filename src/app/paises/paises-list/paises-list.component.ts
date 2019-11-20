import { PaisI } from './../pais.interface';
import { PaisesApiServiceService } from './../paises-api-service.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.scss'],
  providers: [PaisesApiServiceService]
})
export class PaisesListComponent implements OnInit {

  constructor(private PaisesApiService: PaisesApiServiceService) { }

  ngOnInit() {
    this.PaisesApiService.getPaises().subscribe(res => console.log(res));
  }

}
