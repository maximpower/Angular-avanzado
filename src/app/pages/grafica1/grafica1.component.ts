import { Component} from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels: string[] = ['Curro', 'App', 'Otrod'];
  public data = [
    [1300, 450, 100]
  ];

  public colors: Color[] = [
    { backgroundColor: [ '#6847E2', '#009FEE', '#F02059' ] }
  ]

}
