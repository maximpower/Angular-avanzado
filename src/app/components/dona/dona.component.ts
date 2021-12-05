import { Component, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input('labels') donaLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Multi-Order Sales'];
  @Input('data') donaData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input('colors') colorsData: Color[] = [
    { backgroundColor: ['#6847E6', '#009FEE', '#F02059'] }
  ];
  @Input('title') title: string = "Sin titulo";

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Multi-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]
  // ];

  // public colors: Color[] = [
  //   { backgroundColor: [ '#6847E6', '#009FEE', '#F02059' ] }
  // ]

}
