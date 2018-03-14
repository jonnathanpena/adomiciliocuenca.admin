import { Component, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import  { ChartsModule } from  'ng2-charts';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
import * as tableData from './smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
declare var require: any;

const data: any = require('./data.json');

/* export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
   options?: any; 
   responsiveOptions?: any;
  events?: ChartEvent; 
}
 */

@Component({
	templateUrl: './estadistica.component.html'
})
export class EstadisticaComponent implements AfterViewInit {
	subtitle:string;
    source: LocalDataSource;	
	constructor() {
        this.source = new LocalDataSource(tableData.data);
	}
    settings2 = tableData.settings;
	 // This is for the dashboar line chart
    // lineChart
    public lineChartData: Array<any> = [
        { data: [0, 100, 60, 200, 150, 90, 150], label: 'Comisión' }
    ];
    public lineChartData2: Array<any> = [
        { data: [0, 500, 50, 800, 150, 90, 300, 0], label: 'APP' },
        { data: [0, 300, 500, 200, 800, 100, 500, 0], label: 'Moto Propia' }
    ];
    public lineChartLabels2: Array<any> = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ];
    public lineChartLabels: Array<any> = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D'
    ];
    public lineChartOptions: any = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            }  
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            },
          }]
        },
        responsive: true,
        maintainAspectRatio: false
    };
    public lineChartOptions2: any = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            }  
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            },
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
        elements : { line : { tension : 0 } }
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(25,118,210,0.0)',
            borderColor: 'rgba(25,118,210,1)',
            pointBackgroundColor: 'rgba(25,118,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,118,210,0.5)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(38,218,210,0.0)',
            borderColor: 'rgba(38,218,210,1)',
            pointBackgroundColor: 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(38,218,210,0.5)'
        }
        
    ];
    public lineChartLegend: boolean = true;
    public lineChartLegend2: boolean = false;
    public lineChartType: string = 'line';
   
	ngAfterViewInit(){
        (<any>$('#spark8')).sparkline([ 4, 5, 0, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '40',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#26c6da'
        });
        (<any>$('#spark9')).sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '40',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#ef5350'
        });
        (<any>$('#spark10')).sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '40',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#7460ee'
        });
        (<any>$('.spark-count')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '70',
            barWidth: '2',
            resize: true,
            barSpacing: '6',
            barColor: 'rgba(255, 255, 255, 0.3)'
        });
        (<any>$('.spark-count2')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
            type: 'bar',
            width: '100%',
            height: '70',
            barWidth: '2',
            resize: true,
            barSpacing: '6',
            barColor: 'rgba(255, 255, 255, 0.3)'
        });

        $(".list-task .list-group-item .checkbox label.custom-control").click(function () {
            $(this).toggleClass("task-done");
        });
    }
}