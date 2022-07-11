import React from 'react';
import ReactApexChart from "react-apexcharts";


class MultipleChart extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'ClO2',
        type: 'line',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        color: '#A020F0'
      }, {
        name: 'Generation (by Shot Size)',
       
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        color: '#FF0000'
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          // animations: {
          //   enabled: false,
          // },
          // stacked: false
        },
        stroke: {
          width: [1, 0],
          // strokeLineCap: 'round',
          
        },
        title: {
          text: 'ClO2 level'
        },
        // tooltip: {
        //   intersect: true,
        //   shared: false
        // },
        // theme: {
        //   palette: 'palette1'
        // },
        // markers: {
        //   size: 5,
        //   hover: {
        //     size: 9
        //   }
        // },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'ClO2 (ppb))',
          },
        
        }, {
          opposite: true,
          title: {
            text: 'Shot Size (μL)'
          }
        }]
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
export default MultipleChart;