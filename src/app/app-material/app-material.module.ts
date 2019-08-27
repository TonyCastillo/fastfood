import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule,

} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class AppMaterialModule { }
