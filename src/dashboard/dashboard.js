import React from 'react';
import TelemetryApiData from "./services/telemetryApiData";
import './Dashboard.scss';
import StripedTable from "../tables/StripedTable";
import { Line } from 'react-chartjs-2';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'chartjs-plugin-zoom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Dropdown as DropdownReact } from 'react-bootstrap';
import DeviceDetails from '../shared-components/Util/deviceDetails';
import LinearWithValueLabel from './cartridgeLevel'
import Devices from '../devices/devices'
import DeviceMeta from '../shared-components/Util/device-meta/deviceMeta';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, SyncOutlined } from '@ant-design/icons';
import { DatePicker, Select as AntSelect, Space, TimePicker } from 'antd';
import { useState } from 'react';
import MixedChart from './services/MixedChart';
import LineWithDataLabels from './services/LineWithDataLabels';
import MultipleSeries from './services/MultipleSeries';

const { RangePicker } = DatePicker;
const { Option } = Select;
var type = 'time';


var moment = require('moment'); // require
var deviceIdRouteValue = null;
export class Dashboard extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      clo2DonutValue: [],
      humidityDonutValue: [],
      temperatureDonutValue: [],
      barometricDonutValue: [],
      deviceId: '',
      deviceMapState: [],
      latestDeviceNameState: [],
      latestDeviceIdState: [],
      datagridTelemetryMapState: [],
      generationEventMapState: [],
      timeSeriesChartClo2Data: {},
      timeSeriesChartGenerationData: {},
      selectedTimeRange: [],
      defaultTimeFilterKeyState: "Now",
      defaultTimeFilterValueState: 2,
      selectedTimeFilterValueState: 0,
      selectedDeviceIdValueState: 0,
      clo2Shadow: [],
      clo2Solid: [],
      tempShadow: [],
      tempSolid: [],
      rhShadow: [],
      rhSolid: [],
      baroShadow: [],
      baroSolid: [],
      nickname: [],
      mode: [],
      modesList: [],
      location: [],
      open: false,
      deviceMetaData: {},
      cartridgeLevelValue: 0,
      refreshState: [],
      timeSeriesRefreshState: [],
      latestUdi: "",
      locationDataState: [],
      modeState: '',
      modeIcon: '',
      modeColor: '',
      refreshIntervalState: 10000,
      selectedRefreshValue: "10s",
      timeFilter: 'true',
      fromDateTime: moment().subtract(2, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z",
      toDateTime: moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z",
      typeOfDateFilter: 'time'
    }
    this.instanceOfA = new Devices();
    deviceIdRouteValue = this.instanceOfA.data.deviceId;
    //console.log('dashboaordState',deviceIdRouteValue);    
  }
  setRoutingValues = (deviceIdRouteValue) => {
    // clearInterval(this.clearIntervalTelemetryData);
    this.setState({ selectedTimeFilterValueState: 2 });
    //console.log('selected time val:',this.state.selectedTimeFilterValueState);
    this.getDeviceTelemetryByFilter(deviceIdRouteValue);
    this.createClo2TimeSeriesMapData('y', deviceIdRouteValue, 2);
    TelemetryApiData.getDevicesByAccId().then((res) => {
      let deviceNameMap = [];
      for (const dataObj of res) {
        if (deviceNameMap.find(x => x.udi === dataObj.udi)) {
        }
        else {
          //  console.log('route nickname-',dataObj.metadata.name)
          deviceNameMap.push({ "deviceName": dataObj.udi, "deviceId": dataObj.id, "nickname": dataObj.metadata.name });
        }
      }
      this.setState({ deviceMapState: deviceNameMap });
      this.setState({ latestDeviceIdState: deviceIdRouteValue });
      this.setState({ selectedDeviceIdValueState: deviceIdRouteValue });

      //console.log('deviceTelemetryByFilterList',this.state.deviceTelemetryByFilterList[0].metadata.name);
      this.setState({ latestDeviceNameState: this.state.deviceTelemetryByFilterList[0].metadata.name });

    })
    //   setTimeout(() => {
    //   this.clearIntervalTelemetryData=setInterval(() => {
    //     this.refresh5Sec();
    //   }, 10000);
    // },3000);
  }

  onChange = (value, dateString) => {
    // console.log('Selected Time: ', value);
    //console.log('Formatted Selected Time: ', dateString[0],"--to Time- ",dateString[1]);
    this.setState({ fromDateTime: dateString[0] });
    this.setState({ toDateTime: dateString[1] });
    this.setState({ timeSeriesRefreshState: true });
    this.createClo2TimeSeriesMapDataByDateRange('n', this.state.selectedDeviceIdValueState, dateString[0], dateString[1]);
  };

  createClo2TimeSeriesMapDataByDateRange = (onMount, deviceSelected, fromDate, toDate) => {
    //console.log("deep diving dynamo to get new data for timeseries chart");
    let dateLabelTimeSeriesMap = [];
    let clo2ValuesTimeSeriesMap = [];
    let shotSizeValuesTimeSeriesMapTest = [];
    let shotSizeValuesTimeSeriesMap = [];

    if (onMount == 'y') {
      //console.log('first page mount deviceId:: ',deviceSelected);
    }
    else {
      // console.log('filter select / page refresh deviceId:: ',deviceSelected);
    }
    // console.log('timeRangeSelected: ',timeRangeSelected)
    let _tempCurrentTime = moment.utc(moment(toDate)).format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z";
    //let currentTime = moment().utc().format("DD MM YYYY hh:mm:ss");
    // console.log('current time:: ',_tempCurrentTime);
    let _tempFromTime = moment.utc(moment(fromDate)).format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z";
    //let fromTime = moment().subtract(timeRangeSelected, 'm').utc().format("DD MM YYYY hh:mm:ss");
    console.log('fromTime:: ', _tempFromTime, "  _tempCurrentTime:: ", _tempCurrentTime);
    TelemetryApiData.getHistoricalTelemetryByDevIdAccIdTime(deviceSelected, _tempFromTime, _tempCurrentTime, 2200).then((resTimeSeries) => {
      //  console.log('resTimeSeries:: ',resTimeSeries);
      this.setState({ datagridTelemetryMapState: resTimeSeries });

      for (const dataObj of resTimeSeries) {
        dateLabelTimeSeriesMap.push(dataObj.eventDate);
        clo2ValuesTimeSeriesMap.push((dataObj.clo2.value).toFixed(2));
        if (dataObj.generated == true) {
          //console.log('lastShot:: ',dataObj.lastShotSize.value);
          shotSizeValuesTimeSeriesMapTest.push(dataObj.lastShotSize.value);
        } else {
          shotSizeValuesTimeSeriesMapTest.push('-1'); //-1 or plot 0.1 start y-axis
        }
      }
      //console.log('clo2ValuesTimeSeriesMap::: ',clo2ValuesTimeSeriesMap);
      //console.log('shotSizeValuesTimeSeriesMap::: ',shotSizeValuesTimeSeriesMap);
      //console.log('dateLabel:: ',dateLabelTimeSeriesMap);  

      const clo2LevelTimeSeriesMapStyles = {
        labels: dateLabelTimeSeriesMap,
        datasets: [{
          label: 'ClO2',
          data: clo2ValuesTimeSeriesMap,
          backgroundColor: [
            '#ebebfa',
          ],
          borderColor: [
            '#a461d8'
          ],
          borderWidth: 2,
          fill: false,
          pointBorderColor: "#fff",
          pointBackgroundColor: "#a461d8",
          pointBorderWidth: 1,
          pointRadius: 0,
        },
        {
          label: 'Shot Size (μL)',
          yAxisID: 'B',
          data: shotSizeValuesTimeSeriesMapTest,
          pointRadius: 3,
          pointBorderColor: "#ff0000",
          pointBackgroundColor: "#ff0000",
          pointBorderWidth: 1,
          fill: false,
          showLine: false,
        }
        ],
      };

      this.setState({ timeSeriesChartClo2Data: clo2LevelTimeSeriesMapStyles });
      this.setState({ timeSeriesRefreshState: false });
    });
  }

  onChangeFilterDateTime = (e) => {
    // console.log('onChangeFilterDateTime::',e.target.value);
    if (e.target.value === 'time') {
      this.setState({ timeFilter: 'true' });
      this.setState({ selectedTimeFilterValueState: 2 });
    } else {
      this.setState({ timeFilter: 'false' });
      this.setState({ fromDateTime: moment().subtract(2, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z" });
      this.setState({ toDateTime: moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z" });
    }

  }


  handleMenuClick = (e) => {
    clearInterval(this.clearIntervalTelemetryData); //stop inteval
    setTimeout(() => {
      this.setNewInterval(e.item.props.value, e.item.props.title)
    }, 500);
  };



  setNewInterval = (interval, intervalTitle) => {
    if (interval === '0') {
      this.setState({ selectedRefreshValue: intervalTitle });
      clearInterval(this.clearIntervalTelemetryData); //stop inteval
    }
    else {
      this.setState({ refreshIntervalState: Number(interval) });
      this.setState({ selectedRefreshValue: intervalTitle });
      this.clearIntervalTelemetryData = setInterval(() => {
        this.refresh5Sec();
      }, this.state.refreshIntervalState);
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
          value: '0',
        },
        {
          title: '5s',
          label: '5s',
          key: '2',
          value: '5000',
        },
        {
          title: '10s',
          label: '10s',
          key: '3',
          value: '10000',
        },
        {
          title: '20s',
          label: '20s',
          key: '4',
          value: '20000',
        },
        {
          title: '30s',
          label: '30s',
          key: '5',
          value: '30000',
        },
        {
          title: '1m',
          label: '1m',
          key: '6',
          value: '60000',
        },
        {
          title: '5m',
          label: '5m',
          key: '7',
          value: '300000',
        },
        {
          title: '15m',
          label: '15m',
          key: '8',
          value: '900000',
        },
        {
          title: '30m',
          label: '30m',
          key: '9',
          value: ' 1800000'
        },
        {
          title: '1h',
          label: '1h',
          key: '10',
          value: ' 3600000'
        },
        {
          title: '2h',
          label: '2h',
          key: '11',
          value: '7200000'
        },
        {
          title: '1d',
          label: '1d',
          key: '12',
          value: '86400000'
        },
      ]}
    />
  );


  getTelemetryData = () => {
    let baroP = [];
    this.setState({ deviceMapState: [] });
    this.setState({ selectedTimeRange: [] });
    TelemetryApiData.getDevicesByAccId().then((res) => {
      //console.log('TelemetryApiData.getDevicesByAccId:: ',res);
      baroP = res[0].barometricPressure * 0.02953;
      this.setState({ clo2DonutValue: res[0].clo2.toFixed(2) });
      this.setState({ humidityDonutValue: res[0].humidity.toFixed(2) });
      this.setState({ temperatureDonutValue: res[0].temperature.toFixed(2) });
      this.setState({ barometricDonutValue: baroP.toFixed(2) });
      this.setState({ latestUdi: res[0].udi });
      this.getDeviceDetails(res);
      this.populateDeviceListFilter(res);
      this.setState({ defaultTimeFilterKeyState: "Now" });
      this.setState({ defaultTimeFilterValueState: 2 });
      this.setState({ selectedDeviceIdValueState: res[0].id });
      this.setState({ selectedTimeFilterValueState: 2 });
      this.createClo2TimeSeriesMapData('y', res[0].id, this.state.defaultTimeFilterValueState);
      //color all the donuts based on threshold
      this.setClo2ThresholdRangeData(res);
      this.setRhThresholdRangeData(res);
      this.setTempThresholdRangeData(res);
      this.setBaroThresholdRangeData();
      this.setState({ refreshState: false });
    });
  }
  getDeviceDetails = (res) => {
    let hierarchy = [];
    let hierarchyList = [];
    let hierarchyResult = '';
    if (res[0].metadata != null) {
      this.setState({ mode: res[0].mode });
      this.getMode(res[0].mode);
      this.setState({ deviceMetaData: res[0].metadata })
      if (res[0].metadata.name != null) {
        this.setState({ nickname: res[0].metadata.name });
      }
      else {
        this.setState({ nickname: "None" });
      }
      if (res[0].metadata.location != null) {
        if (res[0].metadata.parentHierarchy != "") {
          hierarchy.push(res[0].metadata.parentHierarchy.split('#'));

          //console.log('hierarchy',hierarchy,hierarchy[0].length)
          for (let i = 1; i < hierarchy[0].length; i++) {
            for (let j = 0; j < this.state.locationDataState.length; j++) {
              if (hierarchy[0][i] === this.state.locationDataState[j].id) {
                hierarchyList.push({ "value": this.state.locationDataState[j].value });
                hierarchyResult = hierarchyResult.concat(this.state.locationDataState[j].value + '/')

              }
            }

          }
        }

        //console.log('hierarchyResult',hierarchyResult)
        hierarchyResult = hierarchyResult.slice(0, -1);
        this.setState({ location: hierarchyResult });
        this.setState(prevState => ({
          deviceMetaData: {
            ...prevState.deviceMetaData,
            location: res[0].metadata.location
          }
        }));
      }
      else {
        this.setState({ location: "None" });
        this.setState(prevState => ({
          deviceMetaData: {
            ...prevState.deviceMetaData,
            location: "None"
          }
        }));
      }
    }
    else {
      this.setState({ mode: "NONE" });
      this.setState({ name: "None" });
      this.setState({ location: "None" });
      this.setState({ deviceMetaData: [] })
    }
    var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
    var modeIndex = listOfModes.indexOf(this.state.mode);
    listOfModes.splice(modeIndex, 1);
    this.setState({ modesList: listOfModes });
  }

  getMode = (mode) => {
    if (mode === 'SENSE_ONLY') {
      // console.log('In sense on;y')
      this.setState({ modeColor: '#0096FF' });
      this.setState({ modeState: mode });
      this.setState({ modeIcon: 'mdi mdi-48px mdi-access-point' });
      //console.log('In sense on;y',this.state.modeIcon)
    }

    else if (mode === 'STANDBY') {
      this.setState({ modeState: mode });
      this.setState({ modeColor: '#FF8C00' });
      this.setState({ modeIcon: "mdi mdi-48px mdi-power-standby" });
    }
    else if (mode === 'OPERATIONAL') {
      this.setState({ modeState: mode });
      this.setState({ modeColor: '#800080' });
      this.setState({ modeIcon: "mdi mdi-48px mdi-cog-transfer" });
    }
    else if (mode === null) {
      this.setState({ modeState: mode });
      this.setState({ modeColor: '#000000' });
      this.setState({ modeIcon: "mdi mdi-48px mdi-power-standby" });

    }
  }
  getDeviceDetailsByFilter = (res) => {
    let hierarchy = [];
    let hierarchyList = [];
    let hierarchyResult = '';
    if (res[0].metadata != null) {
      this.setState({ mode: res[0].mode });
      this.getMode(res[0].mode);
      this.setState({ deviceMetaData: res[0].metadata })
      if (res[0].metadata.name != null) {
        this.setState({ nickname: res[0].metadata.name });
      }
      else {
        this.setState({ nickname: "None" });
      }
      if (res[0].metadata.location != null) {
        if (res[0].metadata.parentHierarchy != "") {
          hierarchy.push(res[0].metadata.parentHierarchy.split('#'));

          // console.log('hierarchy',hierarchy,hierarchy[0].length)
          for (let i = 1; i < hierarchy[0].length; i++) {
            for (let j = 0; j < this.state.locationDataState.length; j++) {
              if (hierarchy[0][i] === this.state.locationDataState[j].id) {
                hierarchyList.push({ "value": this.state.locationDataState[j].value });
                hierarchyResult = hierarchyResult.concat(this.state.locationDataState[j].value + '/')

              }
            }

          }
        }

        //  console.log('hierarchyResult',hierarchyResult)
        hierarchyResult = hierarchyResult.slice(0, -1);
        this.setState({ location: hierarchyResult });
        this.setState(prevState => ({
          deviceMetaData: {
            ...prevState.deviceMetaData,
            location: res[0].metadata.location
          }
        }));
      }
      else {
        this.setState({ location: "None" });
        this.setState(prevState => ({
          deviceMetaData: {
            ...prevState.deviceMetaData,
            location: "None"
          }
        }));
      }
    }
    else {
      this.setState({ mode: "None" });
      this.setState({ name: "None" });
      this.setState({ location: "None" });
      this.setState({ deviceMetaData: [] })
    }
    var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
    var modeIndex = listOfModes.indexOf(this.state.mode);
    listOfModes.splice(modeIndex, 1);
    this.setState({ modesList: listOfModes });
  }


  setRhThresholdRangeData = (res) => {
    for (let i = 0; i < res.length; i++) {
      if (res[i].humidity >= 25 && res[i].humidity < 30) {
        this.setState({ rhShadow: "#FDC830" });  //yellow
        this.setState({ rhSolid: "#F37335" });
      }
      else if (res[i].humidity >= 30 && res[i].humidity < 60) {
        this.setState({ rhShadow: "#11998e" });
        this.setState({ rhSolid: "#38ef7d" });
      }
      else if ((res[i].humidity > 0 && res[i].humidity < 25) || (res[i].humidity >= 70)) {
        this.setState({ rhShadow: "#f5515f" });
        this.setState({ rhSolid: "#9f041b" });

      }
    }
  }

  setTempThresholdRangeData = (res) => {
    for (let i = 0; i < res.length; i++) {
      if (res[i].temperature > 0 || res[i].temperature < 15) {
        this.setState({ tempShadow: "#FDC830" });  //yellow
        this.setState({ tempSolid: "#F37335" });
      }
      else if (res[i].temperature >= 15 && res[i].temperature <= 25) {
        this.setState({ tempShadow: "#11998e" });
        this.setState({ tempSolid: "#38ef7d" });
      }
      else if (res[i].temperature > 35) {
        this.setState({ tempShadow: "#f5515f" });
        this.setState({ tempSolid: "#9f041b" });

      }
    }
  }


  setClo2ThresholdRangeData = (res) => {
    for (let i = 0; i < res.length; i++) {
      if (res[i].clo2 < 40) {
        this.setState({ clo2Shadow: "#FDC830" });  //yellow
        this.setState({ clo2Solid: "#F37335" });
      }
      else if (res[i].clo2 >= 40 && res[i].clo2 <= 120) {
        this.setState({ clo2Shadow: "#11998e" });
        this.setState({ clo2Solid: "#38ef7d" });
      }
      else {
        this.setState({ clo2Shadow: "#f5515f" });
        this.setState({ clo2Solid: "#9f041b" });
      }
    }
  }

  setBaroThresholdRangeData = () => {
    if (this.state.barometricDonutValue >= 28 && this.state.barometricDonutValue <= 30) {
      //console.log('baro yellow')
      this.setState({ baroShadow: "#FDC830" });  //yellow
      this.setState({ baroSolid: "#F37335" });
    }
    else if (this.state.barometricDonutValue > 30 && this.state.barometricDonutValue <= 33) {
      // console.log('baro green')
      this.setState({ baroShadow: "#11998e" });
      this.setState({ baroSolid: "#38ef7d" });
    }
    else if (this.state.barometricDonutValue > 33 || this.state.barometricDonutValue < 28) {
      //console.log('baro red')
      this.setState({ baroShadow: "#f5515f" });
      this.setState({ baroSolid: "#9f041b" });
    }
  }

  getDeviceTelemetryByFilter = (deviceId) => {
    TelemetryApiData.getCurrentTelemetryByDevIdAccId(deviceId).then((resultByFilter) => {
      // console.log('resultByFilter:: ',resultByFilter);  
      this.setState({ clo2DonutValue: resultByFilter[0].clo2.toFixed(2) });
      this.setState({ humidityDonutValue: resultByFilter[0].humidity.toFixed(2) });
      this.setState({ temperatureDonutValue: resultByFilter[0].temperature.toFixed(2) });
      this.setState({ barometricDonutValue: (resultByFilter[0].barometricPressure * 0.02953).toFixed(2) });
      this.setState({ cartridgeLevelValue: resultByFilter[0].cartridgeLevel });
      this.setState({ latestUdi: resultByFilter[0].udi });
      this.setClo2ThresholdRangeData(resultByFilter);
      this.setRhThresholdRangeData(resultByFilter);
      this.setTempThresholdRangeData(resultByFilter);
      this.setBaroThresholdRangeData();
      this.getDeviceDetailsByFilter(resultByFilter);
      this.setState({ deviceTelemetryByFilterList: resultByFilter });
      this.setState({ refreshState: false });

    })
  }

  getMasterLocationData = () => {
    TelemetryApiData.getLocationByFilter().then((locationByFilter) => {
      this.setState({ locationDataState: locationByFilter })
    })
  }

  populateDeviceListFilter = (deviceList) => {
    let _tempDeviceMap = [];
    for (const deviceDataObj of deviceList) {
      if (_tempDeviceMap.find(x => x.udi === deviceDataObj.udi)) {
      }
      else {
        _tempDeviceMap.push({ "deviceName": deviceDataObj.udi, "deviceId": deviceDataObj.id, "nickname": deviceDataObj.metadata.name });
      }
    }
    this.setState({ latestDeviceIdState: _tempDeviceMap[0].deviceId });
    this.setState({ deviceMapState: _tempDeviceMap });
    this.setState({ latestDeviceNameState: _tempDeviceMap[0].nickname });
  }


  getLimitOnTimeFilter(timeRangeSelected) {
    let _limit = '';
    if (timeRangeSelected == 2) {
      _limit = 11;
    }
    else if (timeRangeSelected == 5) {
      _limit = 27;
    }
    else if (timeRangeSelected == 15) {
      _limit = 81;
    }
    else if (timeRangeSelected == 30) {
      _limit = 163;
    }
    else if (timeRangeSelected == 60) {
      _limit = 327;
    }
    else if (timeRangeSelected == 180) {
      _limit = 982;
    }
    else if (timeRangeSelected == 360) {
      _limit = 1964;
    }
    else if (timeRangeSelected == 720) {
      _limit = 3927;
    }
    else if (timeRangeSelected == 1440) {
      _limit = 7855;
    }
    else if (timeRangeSelected == 2880) {
      _limit = 15709;
    }
    else if (timeRangeSelected == 10080) {
      _limit = 54982;
    }
    else {
    }
    return _limit;
  }

  createClo2TimeSeriesMapData = (onMount, deviceSelected, timeRangeSelected) => {
    // console.log("deep diving dynamo to get new data for timeseries chart");
    let dateLabelTimeSeriesMap = [];
    let clo2ValuesTimeSeriesMap = [];
    let shotSizeValuesTimeSeriesMapTest = [];
    let shotSizeValuesTimeSeriesMap = [];

    if (onMount == 'y') {
      // console.log('first page mount deviceId:: ',deviceSelected);
    }
    else {
      //console.log('filter select / page refresh deviceId:: ',deviceSelected);
    }
    //console.log('timeRangeSelected: ',timeRangeSelected)
    let _tempCurrentTime = moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z";
    //let currentTime = moment().utc().format("DD MM YYYY hh:mm:ss");
    //console.log('current time:: ',_tempCurrentTime);
    let _tempFromTime = moment().subtract(timeRangeSelected, 'm').utc().format("yyyy-MM-DDTHH:mm:ss.SSS") + "Z";
    //let fromTime = moment().subtract(timeRangeSelected, 'm').utc().format("DD MM YYYY hh:mm:ss");
    //console.log('fromTime:: ',_tempFromTime);
    TelemetryApiData.getHistoricalTelemetryByDevIdAccIdTime(deviceSelected, _tempFromTime, _tempCurrentTime, 2200).then((resTimeSeries) => {
      // console.log('resTimeSeries:: ',resTimeSeries);
      this.setState({ datagridTelemetryMapState: resTimeSeries });

      for (const dataObj of resTimeSeries) {
        dateLabelTimeSeriesMap.push(dataObj.eventDate);
        clo2ValuesTimeSeriesMap.push((dataObj.clo2.value).toFixed(2));
        if (dataObj.generated == true) {
          // console.log('lastShot:: ',dataObj.lastShotSize.value);
          shotSizeValuesTimeSeriesMapTest.push(dataObj.lastShotSize.value);
        } else {
          shotSizeValuesTimeSeriesMapTest.push('-1'); //-1 or plot 0.1 start y-axis
        }
      }
      // console.log('clo2ValuesTimeSeriesMap::: ',clo2ValuesTimeSeriesMap);
      //console.log('shotSizeValuesTimeSeriesMap::: ',shotSizeValuesTimeSeriesMap);
      //console.log('dateLabel:: ',dateLabelTimeSeriesMap);  

      const clo2LevelTimeSeriesMapStyles = {
        labels: dateLabelTimeSeriesMap,
        datasets: [{
          label: 'ClO2',
          data: clo2ValuesTimeSeriesMap,
          backgroundColor: [
            '#ebebfa',
          ],
          borderColor: [
            '#a461d8'
          ],
          borderWidth: 2,
          fill: false,
          pointBorderColor: "#fff",
          pointBackgroundColor: "#a461d8",
          pointBorderWidth: 1,
          pointRadius: 0,
        },
        {
          label: 'Shot Size (μL)',
          yAxisID: 'B',
          data: shotSizeValuesTimeSeriesMapTest,
          pointRadius: 3,
          pointBorderColor: "#ff0000",
          pointBackgroundColor: "#ff0000",
          pointBorderWidth: 1,
          fill: false,
          showLine: false,
        }
        ],
      };

      this.setState({ timeSeriesChartClo2Data: clo2LevelTimeSeriesMapStyles });
      this.setState({ timeSeriesRefreshState: false });
    });
  }

  clo2LevelTimeSeriesMapOptions = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        grace: 100,
        scaleLabel: {
          display: true,
          labelString: 'ClO2 (ppb)'
        },
        grid: {
          color: 'red',
          borderColor: 'grey',
          tickColor: 'grey'
        },
        ticks: { beginAtZero: true, min: 0 }
      },
      {
        id: 'B',
        grace: 100,
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'Shot Size (μL)'
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        gridLines: {
          display: false
        },
        ticks: { beginAtZero: true, min: 0 }
      }
      ],
      xAxes: [{
        type: 'time',
        time: {
          minUnit: 'second',
          displayFormats: {
            second: 'H:mm:ss',
            minute: 'H:mm',
            hour: 'H:mm',
            day: 'MMM D',
            month: 'MMM YYYY',
            quarter: 'dd MMM YYYY'
          },
          tooltipFormat: 'MMM D YYYY H:mm:ss'
        },
        title: {
          display: true,
          text: 'Time',
          color: '#FF0000'
        },
        ticks: {
          beginAtZero: true,
          autoSkip: true,
          source: 'auto',
          major: {
            enabled: true
          }
        }
      }],
    },
    /*zoom: {
       enabled: true,
       mode: 'x',
    },*/
    pan: {
      enabled: true,
      mode: 'x',
    },
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: .4
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };

  handleDeviceFilterChange = (e) => {
    //console.log("Device filter selected: "+e.target.value+"when time-filter is: "+this.state.selectedTimeFilterValueState);
    this.setState({ deviceId: e.target.value });
    this.setState({ latestDeviceIdState: e.target.value });
    this.setState({ selectedDeviceIdValueState: e.target.value });
    this.setState({ refreshState: true });
    this.setState({ timeSeriesRefreshState: true });
    this.getDeviceTelemetryByFilter(e.target.value);
    if (this.state.timeFilter == 'true') {
      this.createClo2TimeSeriesMapData('n', e.target.value, this.state.selectedTimeFilterValueState);
    } else {
      this.createClo2TimeSeriesMapDataByDateRange('n', e.target.value, this.state.fromDateTime, this.state.toDateTime);
    }

  }

  handleTimeFilterChange = (e) => {
    // console.log("Time filter selected: "+e.target.value+"when device is: "+this.state.selectedDeviceIdValueState);
    this.setState({ refreshState: true });
    this.setState({ timeSeriesRefreshState: true });
    this.getDeviceTelemetryByFilter(this.state.selectedDeviceIdValueState);
    this.setState({ selectedTimeFilterValueState: e.target.value });
    //from date to date setState

    this.createClo2TimeSeriesMapData('n', this.state.selectedDeviceIdValueState, e.target.value);
  };

  deviceMetaModalOpen = () => {
    // console.log('clicken open:: ');
    clearInterval(this.clearIntervalTelemetryData);  //stopping refresh intervals
    this.setState({ open: true });
  }

  handleResponseModal = (childData) => {
    // console.log('childData:: ',childData);
    this.setState({ open: childData });
    this.clearIntervalTelemetryData = setInterval(() => { //starting refresh intervals on modal close
      this.refresh5Sec();
    }, this.state.refreshIntervalState);
  }

  refresh5Sec = () => {
    //console.log('refresh 5sec started')
    //console.log('refresh deviceId :: ',this.state.deviceId);
    console.log('latest deviceId:: ', this.state.selectedDeviceIdValueState);
    console.log('selected time range:: ', this.state.selectedTimeFilterValueState);
    var _tempDeviceId = 0;
    if (this.state.selectedDeviceIdValueState == "" || this.state.selectedDeviceIdValueState == null) {
      _tempDeviceId = this.state.selectedDeviceIdValueState;
    } else {
      _tempDeviceId = this.state.selectedDeviceIdValueState;
    }
    var _tempSelectedTime = 0;
    if (this.state.selectedTimeFilterValueState == "" || this.state.selectedTimeFilterValueState == null) {
      _tempSelectedTime = 2;
    } else {
      _tempSelectedTime = this.state.selectedTimeFilterValueState;
    }
    this.setState({ refreshState: true });
    this.setState({ timeSeriesRefreshState: true });
    this.getDeviceTelemetryByFilter(_tempDeviceId);
    if (this.state.timeFilter == 'true') {

      this.setState({ timeSeriesRefreshState: true });
      this.createClo2TimeSeriesMapData("n", _tempDeviceId, _tempSelectedTime);
    } else {

      this.setState({ timeSeriesRefreshState: true });
      this.createClo2TimeSeriesMapDataByDateRange("n", _tempDeviceId, this.state.fromDateTime, this.state.toDateTime);
    }

  }

  sendCommand = (mode) => {
    //console.log('selectedDeviceIdValueState:: ',this.state.selectedDeviceIdValueState);
    //console.log('mode:: ',mode,"Udi:: ",this.state.latestUdi);
    TelemetryApiData.sendCommandForChangeMode(this.state.selectedDeviceIdValueState, this.state.latestUdi, mode).then((res) => {
      //console.log('command data:: ',res);
    });
  }
  setType = (e) => {
    this.setState({ type: e });
  }
  componentDidMount() {
    this.setState({ refreshState: true });
    this.setState({ timeSeriesRefreshState: true });
    // this.sendCommand();
    if (deviceIdRouteValue == null) {
      //console.log('if did mount')
      setTimeout(() => {
        this.getTelemetryData();
        this.getMasterLocationData();
      }, 200);
    }
    else {
      //console.log('else did mount')
      this.setRoutingValues(deviceIdRouteValue);
    }

    this.clearIntervalTelemetryData = setInterval(e => this.refresh5Sec(), this.state.refreshIntervalState);
  }

  componentWillUnmount() {
    clearInterval(this.clearIntervalTelemetryData);
  }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }



  render() {

    return (
      <div className="dashboard-top-align ml-1 mr-1">
        <div className="row mb-2 ">
          <div className="col">
            <nav aria-label="breadcrumb justify-content-center" style={{ "height": "50px", "textAlign": "center", "lineHeight": "50px" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/single-device">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Events</b><label><b style={{ "color": "red" }}>.LIVE</b></label>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col ">
            <ul className="list-group list-group-horizontal fixed-content1 float-end" style={{ marginRight: "-5px" }}>
              <li className="list-group-item border-0">
                <Box sx={{ minWidth: 220 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="device-select-label">Devices</InputLabel>
                    <Select
                      labelId="device-select-label"
                      id="device-select"
                      // value={this.state.deviceId}
                      defaultValue='{this.state.latestDeviceNameState}'
                      label="Devices"
                      onChange={this.handleDeviceFilterChange} >
                      <MenuItem value='{this.state.latestDeviceNameState}' style={{ display: "none" }}>
                        {this.state.latestDeviceNameState}
                      </MenuItem>
                      {this.state.deviceMapState.map((make, index) => (
                        <MenuItem key={make.deviceId} value={make.deviceId}>{make.nickname}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </li>
              <li className="list-group-item border-0">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="datefilter-select-label">Date & Time </InputLabel>
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
                  <Box sx={{ minWidth: 220 }}>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="time-range-select-label">Time</InputLabel>
                      <Select
                        labelId="time-range-select-label"
                        id="time-range-select"
                        defaultValue={2}
                        label="Time"
                        onChange={this.handleTimeFilterChange} >
                        <MenuItem value={2}>Now</MenuItem>
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
                      allowClear={false}
                      style={{ height: "40px" }}
                    />
                  </Space>
                </li>
              }
              <li className="list-group-item border-0">

                <Dropdown.Button style={{ height: "40px", }} onClick={this.refresh5Sec} overlay={this.menu} defaultValue="5s" placement="bottom" icon={<DownOutlined />}>
                  {this.state.selectedRefreshValue}<SyncOutlined />
                </Dropdown.Button>
              </li>
              <li className="list-group-item border-0">
                <div className="dropdown dropdown-arrow-none">
                  <DropdownReact style={{ height: "36px", }} size="lg">
                    <DropdownReact.Toggle size="lg" className="btn p-0  float-right text-dark bg-transparent border-0 hide-carret">
                      <i className="mdi mdi-dots-vertical"></i>
                    </DropdownReact.Toggle>
                    <DropdownReact.Menu>
                      <DropdownReact.Item onClick={() => this.sendCommand(this.state.modesList[0])}><i className="mdi mdi-pencil-outline mr-2"></i> Go {this.state.modesList[0]} </DropdownReact.Item>
                      <DropdownReact.Item onClick={() => this.sendCommand(this.state.modesList[1])}><i className="mdi mdi-pencil-outline mr-2"></i> Go {this.state.modesList[1]} </DropdownReact.Item>
                      <DropdownReact.Item onClick={this.deviceMetaModalOpen}><i className="mdi mdi-eye-outline mr-2"></i> Device Profile </DropdownReact.Item>
                      {/* <DropdownReact.Item><i className="mdi mdi-eye-outline mr-2"></i> Show Alerts </DropdownReact.Item>
                        <DropdownReact.Item><i className="mdi mdi-eye-outline mr-2"></i> OTA Update </DropdownReact.Item> */}
                    </DropdownReact.Menu>
                  </DropdownReact>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-2 fixed-content">
          <div className="col-md-12 px-1 ">
            <div className="card widget-flat ">
              <div className="card-body ">
                <DeviceDetails Name={this.state.nickname} Location={this.state.location} Mode={this.state.mode} />
              </div>
            </div>
          </div>
        </div>





        <div className="row">
          <div className="col-xl-4 col-lg-5" style={{ maxHeight: "auto" }}>
            <div className="row mb-2">
              <div className="col-sm-6 ps-1">
                <div className="card d-flex" style={{ height: "250" }}>
                  <div className="card-body">
                    <h5 className="text-dark font-weight-bold">ClO2</h5>
                    <div className="mx-2 mt-0 dashboardDonutAlign"  >
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="progress-order"><stop offset="0%" stopColor={this.state.clo2Shadow} /><stop offset="100%" stopColor={this.state.clo2Solid} /></linearGradient>
                        </defs>
                      </svg>
                      <CircularProgressbarWithChildren className="progress-order" value={this.state.clo2DonutValue} styles={buildStyles({ rotation: 1 / 2, strokeLinecap: "butt" })} >
                        <div>
                          <label style={{ fontSize: "2rem" }} className="font-weight-bold text-dark">{Math.round(this.state.clo2DonutValue)}</label><br />
                          <p style={{ fontSize: "1.2rem" }}>ppb</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div>
                      {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2vh", float: "right" }} alt="logo" />
                        : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", float: "right" }} alt="logo" />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row mb-2">
                  <div className="col-sm-6 ps-1">
                    <div className="card d-flex">
                      <div className="card-body" style={{ height: "auto" }}>
                        <h6 className="text-dark font-weight-bold">Humidity</h6>
                        <div className="mx-2 dashboardDonutAlign" >
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={this.state.rhShadow} /><stop offset="100%" stopColor={this.state.rhSolid} /></linearGradient>
                            </defs>
                          </svg>
                          <CircularProgressbarWithChildren className="progress-visitors" value={this.state.humidityDonutValue} styles={buildStyles({ rotation: 1 / 2, strokeLinecap: "butt" })}>
                            <div>
                              <label style={{ fontSize: "0.9rem" }} className="font-weight-bold text-dark">{this.state.humidityDonutValue} </label><br />
                              <p style={{ fontSize: "0.6rem" }}>%</p>
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div>
                          {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2vh", float: "right" }} alt="logo" />
                            : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", float: "right" }} alt="logo" />}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ps-1">
                    <div className="card d-flex">
                      <div className="card-body" style={{ height: "auto" }}>
                        <h6 className="text-dark font-weight-bold">Temperature</h6>
                        <div className="mx-2 dashboardDonutAlign">
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={this.state.tempShadow} /><stop offset="100%" stopColor={this.state.tempSolid} /></linearGradient>
                            </defs>
                          </svg>
                          <CircularProgressbarWithChildren className="progress-impressions" value={this.state.temperatureDonutValue} styles={buildStyles({ rotation: 1 / 2, strokeLinecap: "butt" })}>
                            <div><label style={{ fontSize: "0.9rem" }} className="font-weight-bold text-dark">{this.state.temperatureDonutValue} </label> <br />
                              <p style={{ fontSize: "0.6rem" }}>°C</p></div>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div>
                          {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2vh", float: "right" }} alt="logo" />
                            : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", float: "right" }} alt="logo" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2" style={{ minHeight: "15vh" }}>
                  <div className="col-sm-6 ps-1">
                    <div className="card d-flex">
                      <div className="card-body" style={{ height: "auto" }}>
                        <h6 className="text-dark font-weight-bold">Mode</h6>
                        <div className="mx-2 mb-1 dashboardDonutAlign">
                          {/* <img src={require('../assets/images/standby.png')} style={{height: "6vh",float:"right"}} alt="logo" /> */}
                          <i className={this.state.modeIcon}></i>
                        </div>
                        <h6 className="text-dark font-weight-normal" style={{ fontSize: "0.7rem" }}><b style={{ color: this.state.modeColor }}>{this.state.mode}</b></h6>
                        <div>
                          {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2vh", float: "right" }} alt="logo" />
                            : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", float: "right" }} alt="logo" />}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ps-1">
                    <div className="card d-flex">
                      <div className="card-body" style={{ height: "auto" }}>
                        <h6 className="text-dark font-weight-bold">Baro. P</h6>
                        <div className="mx-2 dashboardDonutAlign">
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={this.state.tempShadow} /><stop offset="100%" stopColor={this.state.tempSolid} /></linearGradient>
                            </defs>
                          </svg>
                          <CircularProgressbarWithChildren className="progress-impressions" value={this.state.barometricDonutValue} styles={buildStyles({ rotation: 1 / 2, strokeLinecap: "butt" })}>
                            <div><label style={{ fontSize: "0.9rem" }} className="font-weight-bold mt-2 text-dark">{this.state.barometricDonutValue} </label><br />
                              <p style={{ fontSize: "0.6rem" }}>mbar</p></div>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div>
                          {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "1rem", float: "right" }} alt="logo" />
                            : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", float: "right" }} alt="logo" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12 ps-1">
                <div className="card d-flex">
                  <div className="card-body">
                    <LinearWithValueLabel cartridgeLevel={this.state.cartridgeLevelValue} state={this.state.refreshState} />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="row mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <h6 className="text-dark font-weight-bold">ClO2 level</h6>
                    <div id="visit-sale-chart-legend" className="legend-top-right float-right">
                      <ul className="legend-horizontal">
                        <li>
                          <span className="legend-dots" style={{ background: "#a461d8" }}>
                          </span>ClO2 &nbsp;
                          <span className="legend-dots" style={{ background: "#ff0000" }}>
                          </span>Generation (by Shot Size) &nbsp;
                          {this.state.timeSeriesRefreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2vh", marginTop: "-5px", float: "right" }} alt="logo" /> : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2vh", marginTop: "-5px", float: "right" }} alt="logo" />}

                        </li>
                      </ul>
                    </div>
                  </div>
                  <Line data={this.state.timeSeriesChartClo2Data} options={this.clo2LevelTimeSeriesMapOptions} height={80} />
                </div>
              </div>
            </div>
            <div>
              <DeviceMeta open={this.state.open} metadata={this.state.deviceMetaData} parentCallback={this.handleResponseModal} />
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="row mb-2">
              <div className="card">
                <div className="card-body">
                  <MixedChart/>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="row mb-2">
              <div className="card">
                <div className="card-body">
                  <LineWithDataLabels/>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>


          <div className="col-xl-8 col-lg-7">
            <div className="row mb-2">
              <div className="card">
                <div className="card-body">
                  <MultipleSeries/>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>



        </div>
        <div className="row mb-2">
          <div className="col-md-12 px-1">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                </div>
                <StripedTable DeviceTelemetryData={this.state.datagridTelemetryMapState} state={this.state.timeSeriesRefreshState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
