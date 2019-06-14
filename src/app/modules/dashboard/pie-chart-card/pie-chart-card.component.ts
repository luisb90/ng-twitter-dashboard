import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styleUrls: ['./pie-chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartCardComponent implements OnInit {
  @Input() public chartData: { name: string; value: number }[] = [];
  @Input() public showLabels: boolean;

  constructor() {}

  ngOnInit() {}
}
