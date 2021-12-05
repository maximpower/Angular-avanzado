import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    DonaComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    DonaComponent
  ]
})
export class ComponentsModule { }
