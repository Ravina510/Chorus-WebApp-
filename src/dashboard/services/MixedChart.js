import React from 'react';
import ReactApexChart from "react-apexcharts";

class MixedChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
                name: 'ClO2)',
                type: 'line',
                data: [22, 19, 77, 10,54,55, 20, 38],
                color: '#A020F0'
              },{
                name: 'Generation (by Shot Size)',
                type: 'line',
                data: [20, 29, 37, 36, 44, 45, 50, 58],
                color: '#FF0000'
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [2,  4]
          },
          title: {
            text: 'ClO2 level',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            labels: {
                formatter: function (value, day) {
                  return new Date(day) // The formatter function overrides format property
                }, 
              }
            // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            //  type: 'datetime'
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
                //blue
              },
              labels: {
                style: {
                  colors: '#FF0000',
                }
              },
              title: {
                text: "ClO2 (ppb)",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Generation (by Shot Size)',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                text: "Generation (by Shot Size)",
                style: {
                  color: '#00E396',
                }
              },
            },
            
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 0,
              offsetX: 0
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>


      );
    }
  }


export default MixedChart;