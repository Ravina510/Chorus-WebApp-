import React from 'react';
import ReactApexChart from "react-apexcharts";
import ReactDOM from 'react-dom'


class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          //STANDBY
          {
            name: 'STANDBY',
            data: [ 
              {
                x: 'Canary',
                y: [
                  new Date(1789, 3, 30).getTime(),
                  new Date(1797, 2, 4).getTime()
                ]
              },
            ],
            color: '#FF0000'
          },
          // OPERATIONAL
          {
            name: 'OPERATIONAL',
            data: [
              {
                x: 'Canary',
                y: [
                  new Date(1797, 2, 4).getTime(),
                  new Date(1801, 2, 4).getTime()
                ]
              }
            ]
          },
          // SENSE ONLY
          {
            name: 'SENSE ONLY',
            data: [
              {
                x: 'Canary',
                y: [
                  new Date(1801, 2, 4).getTime(),
                  new Date(1809, 2, 4).getTime()
                ]
              }
            ]
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar'
            // stacked: true
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '50%',
              rangeBarGroupRows: true
            }
          },
          
          stroke: {
            width: 1,
          },
          colors: [
            "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
            "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
            "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
          ],
          fill: {
            type: 'solid'
          },
          xaxis: {
            type: 'datetime'
          },
          legend: {
            position: 'bottom'
          },
          dataLabels: {
            enabled: true,
          },
          tooltip: {
            custom: function(opts) {
              const fromYear = new Date(opts.y1).getFullYear()
              const toYear = new Date(opts.y2).getFullYear()
              const values = opts.ctx.rangeBar.getTooltipValues(opts)
          
              return (
                ''
              )
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
</div>


      );
    }
  }

  // const domContainer = document.querySelector('#app');
  // ReactDOM.render(React.createElement(ApexChart), domContainer);



  export default ApexChart;