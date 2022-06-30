import React, { useState ,useEffect} from "react";
import TelemetryApiData from '../dashboard/services/telemetryApiData'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './DeviceEventsReports.scss';
import StripedTable from "../tables/StripedTable";
// import { Dropdown } from 'react-bootstrap';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined, UserOutlined,SyncOutlined } from '@ant-design/icons';
import { DatePicker, Select as AntSelect, TimePicker } from 'antd';

const { RangePicker } = DatePicker;
var moment = require('moment'); // require

var defaultValueTimeFilter="Last 1 hour"
export class DeviceEventsReports extends React.Component {
  constructor(props){
  super(props)
    this.state = {
      selectedTimeRange: [],
      deviceTelemetryMapData: [],
      refreshState:[],
      refreshIntervalState:30000,
      selectedRefreshValue:"30s",
      timeFilter:'true',
      fromDateTime:moment().subtract(60, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z",
      toDateTime:moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z",
      typeOfDateFilter:'time',
      eventReportMapData:[]
    }
  }
  handleMenuClick = (e) => {
    clearInterval(this.clearIntervalTelemetryData); //stop inteval
    setTimeout(() => {
    this.setNewInterval(e.item.props.value,e.item.props.title)
    }, 500);
  };
  
setNewInterval = (interval,intervalTitle) =>{
  if(interval === '0'){
    this.setState({selectedRefreshValue:intervalTitle});
    clearInterval(this.clearIntervalTelemetryData); //stop inteval
  }
  else{
    this.setState({refreshIntervalState:Number(interval)});
    this.setState({selectedRefreshValue:intervalTitle});
    this.clearIntervalTelemetryData=setInterval(() => {
    this.refresh5Sec();
  }, this.state.refreshIntervalState);
  }
}

onChange = (value, dateString) => {
  this.setState({selectedDateRange:true});
  this.setState({refreshState:true})
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString[0],"--to Time- ",dateString[1]);
  this.setState({fromDateTime:dateString[0]});
  this.setState({toDateTime:dateString[1]});
  this.createClo2TimeSeriesMapDataByDateRange('n', dateString[0],dateString[1]);
  
};

onChangeFilterDateTime = (e) => {
  console.log('onChangeFilterDateTime::',e.target.value);
  if(e.target.value === 'time'){
    this.setState({timeFilter:'true'});
    this.setState({selectedTimeRange:60});
    this.createEventReportMapData('n',60);
  }else{
    this.setState({timeFilter:'false'});
    let tempFromTime = moment().subtract(60, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
    let tempToTime = moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
    this.setState({fromDateTime:moment().subtract(60, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z"});
    this.setState({toDateTime:moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z"});  
    this.createClo2TimeSeriesMapDataByDateRange('n', tempFromTime,tempToTime); 
  }
  
}

  menu = (
    <Menu
      onClick={this.handleMenuClick}
      items={[
        {
          title: 'Off',
          label: 'Off',
          key: '1',
          value:'0',
        },
        {
          title: '5s',
          label: '5s',
          key: '2',
          value:'5000',
        },
        {
          title: '10s',
          label: '10s',
          key: '3',
          value:'10000',
        },
        {
          title: '20s',
          label: '20s',
          key: '4',
          value:'20000',
        },
        {
          title: '30s',
          label: '30s',
          key: '5',
          value:'30000',
        },
        {
          title: '1m',
          label: '1m',
          key: '6',
          value:'60000',
        },
        {
          title: '5m',
          label: '5m',
          key: '7',
          value:'300000',
        },
        {
          title: '15m',
          label: '15m',
          key: '8',
          value:'900000',
        },
        {
          title: '30m',
          label: '30m',
          key: '9',
          value:' 1800000'
        },
        {
          title: '1h',
          label: '1h',
          key: '10',
          value:' 3600000'
        },
        {
          title: '2h',
          label: '2h',
          key: '11',
          value:'7200000'
        },
        {
          title: '1d',
          label: '1d',
          key: '12',
          value:'86400000'
        },
      ]}
    />
  );
  createEventReportMapData = (onMount,timeRangeSelected) => {
  console.log("deep diving dynamo to get new data for detailed event report");
  if(onMount=='y'){
    console.log('first page mount timeRangeSelected:: ',timeRangeSelected);
  }
  else{
    console.log('filter select / page refresh timeRangeSelected:: ',timeRangeSelected);
  }

  let currentTime = moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
  //let currentTime = moment().utc().format("DD MM YYYY hh:mm:ss");
  console.log('current time:: ',currentTime);
  let fromTime = moment().subtract(timeRangeSelected, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
  //let fromTime = moment().subtract(timeRangeSelected, 'm').utc().format("DD MM YYYY hh:mm:ss");
  console.log('fromTime:: ',fromTime);

  TelemetryApiData.getHistoricalTelemetryForReports(fromTime,currentTime,5000).then((resultTelemetry) => {
      this.setState({eventReportMapData: resultTelemetry});
      this.setState({refreshState:false});
  }); 

}

createClo2TimeSeriesMapDataByDateRange = (onMount,fromDate, toDate) => {
  console.log("deep diving dynamo to get new data for detailed event report");
  if(onMount=='y'){
    console.log('first page mount timeRangeSelected:: ',fromDate,toDate);
  }
  else{
    console.log('filter select / page refresh timeRangeSelected:: ',fromDate,toDate);
  }

  let currentTime = moment.utc(moment(toDate)).format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
  //let currentTime = moment().utc().format("DD MM YYYY hh:mm:ss");
  console.log('current time:: ',currentTime);
  let fromTime = moment.utc(moment(fromDate)).format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
  //let fromTime = moment().subtract(timeRangeSelected, 'm').utc().format("DD MM YYYY hh:mm:ss");
  console.log('fromTime:: ',fromTime);

  TelemetryApiData.getHistoricalTelemetryForReports(fromTime,currentTime,5000).then((resultTelemetry) => {
      this.setState({eventReportMapData: resultTelemetry});
      this.setState({refreshState:false});
          });

}

handleTimeFilterChange = (event) => {
  console.log('handleTimeFilterChange - time filter::',event.target.value)
    this.setState({selectedTimeRange:event.target.value});
    this.setState({refreshState:true})
    this.createEventReportMapData('n',event.target.value);
};

componentDidMount(){
  console.log('in reports');
  this.setState({refreshState:true});
  setTimeout(() => {
  this.createEventReportMapData('y',60);
  },100)
 
  this.clearIntervalTelemetryData=setInterval(() => {
    this.refresh5Sec();
  }, this.state.refreshIntervalState);
}

refresh5Sec = () =>{
  if(this.state.timeFilter === 'true'){
    this.setState({refreshState:true});
    var _tempSelectedTime = 0; 
    if(this.state.selectedTimeRange == "" || this.state.selectedTimeRange == null){
      _tempSelectedTime = 60;
    }else{
      _tempSelectedTime = this.state.selectedTimeRange;
    }
    this.createEventReportMapData('n',_tempSelectedTime);
  }
  else{
    this.setState({refreshState:true});
    this.createClo2TimeSeriesMapDataByDateRange('n', this.state.fromDateTime,this.state.toDateTime);
  }
}

componentWillUnmount() {
    clearInterval(this.clearIntervalTelemetryData);
}

render () {
  return (
    <div className="dashboard-top-align">
      <div>
      <div className="row mb-2">
            <div className="col">
            <nav aria-label="breadcrumb justify-content-center" style={{ "height": "50px", "textAlign":"center", "lineHeight":"50px" }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/single-device">Reports</a></li>
              <li className="breadcrumb-item active" aria-current="page">
                <b>Event Logs</b>
              </li>
            </ol>
            </nav>
            </div>
            <div className="col"> 
            <ul className="list-group list-group-horizontal float-end">
           
            <li className="list-group-item border-0">
              <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="datefilter-select-label">Date & Time</InputLabel>
                  <Select
                    labelId="datefilter-select-label"
                    id="datefilter-select"
                   // value={this.state.deviceId}
                    defaultValue={this.state.typeOfDateFilter}
                    label="datefilter select"
                    onChange={this.onChangeFilterDateTime} >
                    <MenuItem key='time' value='time'>Time</MenuItem>
                    <MenuItem key='datetime' value='datetime'>Date & Time</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </li>
            {this.state.timeFilter == 'true' ?
            <li className="list-group-item border-0">
            <Box sx={{ minWidth: 250 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="time-range-select-label">Time</InputLabel>
                  <Select
                    labelId="time-range-select-label"
                    id="time-range-select"
                    defaultValue={defaultValueTimeFilter}
                    label="Time"
                    onChange={this.handleTimeFilterChange} >
                    <MenuItem value={defaultValueTimeFilter} style={{display:"none"}}>{defaultValueTimeFilter}</MenuItem>  
                    <MenuItem value={5}>Last 5 minutes</MenuItem>
                    <MenuItem value={15}>Last 15 minutes</MenuItem>
                    <MenuItem value={30}>Last 30 minutes</MenuItem>
                    <MenuItem value={60}>Last 1 hour</MenuItem>
                    <MenuItem value={180}>Last 3 hours</MenuItem>
                    <MenuItem value={360}>Last 6 hours</MenuItem>
                    <MenuItem value={720}>Last 12 hours</MenuItem>
                    <MenuItem value={1440}>Last 24 hours</MenuItem>
                    <MenuItem value={2880}>Last 2 days</MenuItem>
                    <MenuItem value={4320}>Last 3 days</MenuItem>
                    <MenuItem value={7200}>Last 5 days</MenuItem>
                    <MenuItem value={10080}>Last 7 days</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </li>
            :
            <li className="list-group-item border-0">
            <Space direction="vertical" size={12}>               
                <RangePicker
                  showTime={{
                    format: 'HH:mm',
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={this.onChange}
                  allowClear = {false}
                  style={{ height:"40px"}}
                />
            </Space>  
           </li>
           }
            <li className="list-group-item border-0">
             
            <Dropdown.Button style={{height:"40px",}}onClick={this.refresh5Sec}  overlay={this.menu} placement="bottom" icon={<DownOutlined />}>
            {this.state.selectedRefreshValue}<SyncOutlined />
                  </Dropdown.Button>
            </li>
           
            </ul>
            </div>
  </div>
        
        
       
        <div className="row">
          <div className="col-md-12">
            <div className="justify-content-between align-items-center tab-transparent">
              <div className="mt-4">
                <div className="row mt-2">
                  <div className="col-12 grid-margin">
                    <div className="card">
                    
                      <div className="card-body">          
                     
                        <div className="row">
                          <StripedTable DeviceTelemetryData = {this.state.eventReportMapData}  state={this.state.refreshState} title="DeviceEventsReport" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
            </div>
          </div>      
        </div>
      </div>  
    </div>      
  )
}
}  

export default DeviceEventsReports;

