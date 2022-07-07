import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { Dropdown as DropdownReact } from 'react-bootstrap';
import { Link as ReactLink } from "react-router-dom";
import Link from '@mui/material/Link';
import "./devices.scss"
import './treeSelect.scss';
import 'chartjs-plugin-zoom';
import TelemetryApiData from "../dashboard/services/telemetryApiData.js";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined, UserOutlined, SyncOutlined } from '@ant-design/icons';
import DeviceMeta from '../shared-components/Util/device-meta/deviceMeta';
import { TreeSelect, Select } from 'antd';
import Chart from 'react-apexcharts';
import ApexChart from "./ApexChart";

var chickletRoutingId = null;

var leafNodesMap = [];
var parentNodeMap = [];
var floorDataList = [];
let tempLocationIdsList = [];
const { SHOW_PARENT } = TreeSelect;
var treeData = [];
var resultTreeHierarchyList = [];

export class Devices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: '',
      deviceData: [],
      uniqueLocations: [],
      deviceTelemetryMapData: [],
      fleetDeviceMapData: [],
      fleetDeviceMapDataCompareState: [],
      totalDevices: [],
      shadow: [],
      solid: [],
      locationData: [],
      redCount: [],
      yellowCount: [],
      greenCount: [],
      leafMap: {},
      locationDevicesId: 'All Locations',
      refreshState: [],
      value: [],
      parentDataState: {},
      data: [],
      modeColorState: '',
      modesList: [],
      open: false,
      deviceMetaData: {},
      refreshIntervalState: 10000,
      modeData: [],
      selectedRefreshValue: "10s",
      selectedMode: '',
      fleetDataForModeFilterState: [],


    }
    this.data = { deviceId: chickletRoutingId };
    let resultPushList = [];
    treeData = [];
    floorDataList = [];
    tempLocationIdsList = [];
    resultTreeHierarchyList = [];

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

  handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  onChangeTree = (value, data) => {
    console.log('onChange ', value, data);
    this.setState({ value });
    tempLocationIdsList = [];
    this.getDevicesByLocationFilter(value);


  };

  onTrigger = (id) => {
    this.setState({ routeValue: id })
    chickletRoutingId = id;
    let idCall = new Devices(id);
  };
  getTelemetryData = () => {
    this.setState({ deviceData: [] });
    TelemetryApiData.getDevicesByAccId().then((resultByFilter) => {
      this.setState({ deviceTelemetryMapData: resultByFilter });
      this.setState({ totalDevices: resultByFilter.length })
      this.getDeviceName(resultByFilter);
      this.getThresholdRangeData(resultByFilter);
      this.setState({ fleetDataForModeFilterState: resultByFilter })
      this.setState({ fleetDeviceMapDataCompareState: resultByFilter });
      this.setState({ refreshState: false });
    });
  }

  getDeviceDetails = (res) => {
    if (res.metadata != null) {
      this.setState({ mode: res.mode });
      this.setState({ deviceMetaData: res.metadata })
      if (res.metadata.name != null) {
        this.setState({ nickname: res.metadata.name });
      }
      else {
        this.setState({ nickname: "None" });
      }
      if (res.metadata.location != null) {
        this.setState({ location: res.metadata.location.value });
        this.setState(prevState => ({
          deviceMetaData: {
            ...prevState.deviceMetaData,
            location: res.metadata.location
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



  deviceMetaModalOpen = (itemId) => {
    let resultData = [];
    this.setState({ open: true });
    clearInterval(this.clearIntervalTelemetryData);  //stopping refresh intervals
    for (let i = 0; i < this.state.fleetDeviceMapDataCompareState.length; i++) {
      if (this.state.fleetDeviceMapDataCompareState[i].id === itemId) {
        resultData = this.state.fleetDeviceMapDataCompareState[i];
      }
    }

    this.getDeviceDetails(resultData);
  }

  handleResponseModal = (childData) => {
    this.setState({ open: childData });
    this.clearIntervalTelemetryData = setInterval(() => { //starting refresh intervals on modal close
      this.refresh5Sec();
    }, this.state.refreshIntervalState);
  }

  getDeviceTelemetryByFilter = (deviceId) => {
    TelemetryApiData.getCurrentTelemetryByDevIdAccId(deviceId).then((resultByFilter) => {
      console.log('resultByFilter:: ', resultByFilter, this.state.selectedMode);
      if (this.state.selectedMode === '') {
        this.setState({ totalDevices: resultByFilter.length });
        this.setState({ fleetDataForModeFilterState: resultByFilter });
        this.getThresholdRangeData(resultByFilter);
        this.setState({ refreshState: false });
      }
      else {

        if (resultByFilter[0].mode === this.state.selectedMode) {
          console.log('if')
          this.setState({ totalDevices: resultByFilter.length });
          this.setState({ fleetDataForModeFilterState: resultByFilter });
          this.getThresholdRangeData(resultByFilter);
          this.setState({ refreshState: false });
        }
        else {
          console.log('else')
          resultByFilter = []
          this.setState({ totalDevices: '0' });
          this.setState({ fleetDataForModeFilterState: resultByFilter });
          this.getThresholdRangeData(resultByFilter);
        }
      }
    })
  }
  getDeviceTelemetryByModeFilter = (mode) => {
    console.log('mode--', this.state.selectedMode)
    this.setState({ selectedMode: mode });
    //this.refresh5Sec();
    let resultObj = [];
    if (mode === '') {
      this.setState({ fleetDeviceMapData: this.state.fleetDataForModeFilterState })
    }
    else {
      for (let i = 0; i < this.state.fleetDataForModeFilterState.length; i++) {
        if (mode === this.state.fleetDataForModeFilterState[i].mode) {
          resultObj.push(this.state.fleetDataForModeFilterState[i]);
        }
        this.getThresholdRangeData(resultObj);
      }
      setTimeout(() => {
        this.setState({ refreshState: false });
      }, 1000);

    }
  }
  //this.setState({fleetDeviceMapData:resultObj});



  getDevicesByLocationFilter = (value) => {
    let resultPushList = [];
    if (value.length === 0) {
      tempLocationIdsList = [];
      this.setState({ fleetDeviceMapData: this.state.fleetDeviceMapDataCompareState });
      this.setState({ deviceId: "" });
      this.setState({ totalDevices: this.state.fleetDeviceMapDataCompareState.length })
      this.getThresholdRangeData(this.state.fleetDeviceMapDataCompareState);
    }
    else {
      for (let x = 0; x < value.length; x++) {
        for (let i = 0; i < treeData.length; i++) {
          if (value[x] === treeData[i].value) {                             //building         
            tempLocationIdsList.push({ "id": treeData[i].data });
          }
          for (let j = 0; j < treeData[i].children.length; j++) {                 //wing
            if (value[x] === treeData[i].children[j].value) {
              tempLocationIdsList.push({ "id": treeData[i].children[j].data });
            }
            for (let k = 0; k < treeData[i].children[j].children.length; k++) {     //floor
              if (value[x] === treeData[i].children[j].children[k].value) {
                tempLocationIdsList.push({ "id": treeData[i].children[j].children[k].data });
              }
              for (let l = 0; l < treeData[i].children[j].children[k].children.length; l++) {     //room
                if (value[x] === treeData[i].children[j].children[k].children[l].value) {
                  tempLocationIdsList.push({ "id": treeData[i].children[j].children[k].children[l].data });
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < tempLocationIdsList.length; i++) {
        let deviceId = tempLocationIdsList[i].id;
        if (this.getFleetDataByLocationFilter(deviceId) !== null) {
          resultPushList.push.apply(resultPushList, this.getFleetDataByLocationFilter(deviceId));

        }
      }
      this.setState({ refreshState: true });
      resultPushList = resultPushList.filter(value => JSON.stringify(value) !== '{}');
      this.setState({ fleetDeviceMapData: [] });
      this.setState({ fleetDeviceMapData: resultPushList });
      this.setState({ fleetDataForModeFilterState: resultPushList })
      this.setState({ totalDevices: resultPushList.length })

      this.getThresholdRangeData(resultPushList);
      this.getDeviceName(resultPushList);

      setTimeout(() => {
        this.setState({ refreshState: false });
      }, 700);
      console.log('ref state--', this.state.refreshState);
    }

  }

  getFleetDataByLocationFilter = (deviceId) => {
    let resultObj = [];
    console.log('this.state.fleetDeviceMapDataCompareState', this.state.fleetDeviceMapDataCompareState)
    for (let i = 0; i < (this.state.fleetDeviceMapDataCompareState).length; i++) {

      var locationIdsList = this.state.fleetDeviceMapDataCompareState[i].metadata.parentHierarchy;
      console.log('device---', deviceId);
      console.log('length list---', locationIdsList)
      if (locationIdsList != null) {

        if (locationIdsList.includes(deviceId)) {
          resultObj.push(this.state.fleetDeviceMapDataCompareState[i]);

        }
      }
    }
    console.log('resultObj---', resultObj)
    return resultObj;
  }

  async populateLocationDataTree() {
    leafNodesMap = [];
    parentNodeMap = [];
    treeData = [];
    resultTreeHierarchyList = [];
    await TelemetryApiData.getLocationByFilter().then((locationByFilter) => {

      for (let i = 0; i < locationByFilter.length; i++) {
        if (locationByFilter[i].parentID !== '0' && locationByFilter[i].parentID !== null) {
          leafNodesMap.push({ "title": locationByFilter[i].value, "data": locationByFilter[i].id, "parentID": locationByFilter[i].parentID });
        }
        else {
          var listSize = parentNodeMap.length;
          parentNodeMap.push({ "title": locationByFilter[i].value, "value": listSize.toString(), "key": listSize.toString(), "data": locationByFilter[i].id, "parentID": locationByFilter[i].parentID });
        }
      }
      for (let i = 0; i < parentNodeMap.length; i++) {
        var populatedFloorList = [];
        populatedFloorList = this.getFloors(parentNodeMap[i].data, i);
        floorDataList = [];
        resultTreeHierarchyList.push({ "title": parentNodeMap[i].title, "value": (i.toString()), "key": (i.toString()), "children": populatedFloorList, "data": parentNodeMap[i].data });
        populatedFloorList = [];
      }
    })
    this.setState({ refreshState: false });
    treeData = resultTreeHierarchyList;
  }

  getFloors = (rootNodeParentId, nodeIndex) => {
    for (let j = 0; j < leafNodesMap.length; j++) {  //building 1       
      if (rootNodeParentId === leafNodesMap[j].parentID) {
        let floorListSize = floorDataList.length;
        var floorId = leafNodesMap[j].data;
        var populatedWingList = [];
        populatedWingList = this.getWing(floorId, nodeIndex, floorListSize);
        floorDataList.push({ "title": leafNodesMap[j].title, "value": (nodeIndex + '-' + floorListSize).toString(), "key": (nodeIndex + '-' + floorListSize).toString(), "data": leafNodesMap[j].data, "parentID": leafNodesMap[j].parentID, "children": populatedWingList });
      }
    }
    return floorDataList;
  }

  getWing = (floorId, nodeIndex, floorListSize) => {
    var wingDataList = [];
    for (let i = 0; i < leafNodesMap.length; i++) {
      if (floorId === leafNodesMap[i].parentID) {
        let wingListSize = wingDataList.length;
        var wingId = leafNodesMap[i].data;
        var populatedRoomList = [];
        populatedRoomList = this.getRooms(nodeIndex, wingId, floorListSize, wingListSize);
        wingDataList.push({ "title": leafNodesMap[i].title, "value": (nodeIndex + '-' + floorListSize + '-' + wingListSize).toString(), "key": (nodeIndex + '-' + floorListSize + '-' + wingListSize).toString(), "data": leafNodesMap[i].data, "parentID": leafNodesMap[i].parentID, "children": populatedRoomList });  //Room 1, Room2   
      }
    }
    return wingDataList;
  }

  getRooms = (nodeIndex, wingId, floorListSize, wingListSize) => {
    var roomDataList = [];
    for (let i = 0; i < leafNodesMap.length; i++) {
      if (wingId === leafNodesMap[i].parentID) {
        let roomListsize = roomDataList.length;
        roomDataList.push({ "title": leafNodesMap[i].title, "value": (nodeIndex + '-' + floorListSize + '-' + wingListSize + '-' + roomListsize).toString(), "key": (nodeIndex + '-' + floorListSize + '-' + wingListSize + '-' + roomListsize).toString(), "data": leafNodesMap[i].data, "parentID": leafNodesMap[i].parentID, "children": [] });  //Room 1, Room2            
      }
    }
    return roomDataList;
  }

  getDeviceName = (deviceDataResult) => {
    let deviceNameMap = [];
    for (const dataObj of deviceDataResult) {
      if (deviceNameMap.find(x => x.udi === dataObj.udi)) {
      }
      else {
        deviceNameMap.push({ "deviceName": dataObj.udi, "deviceId": dataObj.id, "nickname": dataObj.metadata.name });
      }
    }
    this.setState({ deviceData: deviceNameMap });

  }

  getThresholdWiseFleetDashboard = () => {
    let res = this.state.deviceTelemetryMapData;
    let newList = [];
    for (let i = 0; i < res.length; i++) {
      if (res[i].clo2 === 0 || res[i].clo2 < 40) {
        res[i].shadow = "#FFFAD2";
        res[i].solid = "#FFED49";
        newList.push(res[i]);
      }

      this.setState({ fleetDeviceMapData: newList });
    }
  }

  // handleDeviceFilterChange = (e) => {   
  //       console.log('handleDeviceFilterChange called:: ');
  //     this.setState({deviceId: e.target.value});  
  //      if(e.target.value === ""){
  //         this.setState({value:[]});
  //        this.setState({refreshState:true});
  //        this.getTelemetryData();

  //        //treeData=[];
  //       // this.getLocationData(); 
  //        this.setState({locationDevicesId: 'All Locations'});           
  //       console.log('e.target.value',e.target.value)        
  //      }else{
  //        this.setState({refreshState:true});
  //        this.getDeviceTelemetryByFilter(e.target.value);
  //      }          
  // }

  handleDeviceFilterChange = (e) => {
    console.log(e);
  }


  handleModeFilterChange = (e) => {
    console.log('handleModeFilterChange called:: ', e.target.value);

    this.setState({ selectedMode: e.target.value });
    //this.refresh5Sec();
    this.getDeviceTelemetryByModeFilter(e.target.value);

  }

  getThresholdRangeData = (res) => {
    console.log("length", res.length);

    let rCount = 0;
    let gCount = 0;
    let yCount = 0;
    if (res.length == 0) {
      this.setState({ yellowCount: yCount })
      this.setState({ redCount: rCount })
      this.setState({ greenCount: gCount })
      this.setState({ fleetDeviceMapData: res });

      this.setState({ totalDevices: res.length })
    }
    else {
      for (let i = 0; i < res.length; i++) {
        if (res[i].clo2 != null) {
          if (res[i].clo2 < 40) {

            res[i].clo2 = parseFloat(res[i].clo2).toFixed(2);
            res[i].shadow = "#FFFAD2";
            res[i].solid = "#FFED49";
            yCount = yCount + 1;
          }
          else if (res[i].clo2 >= 40 && res[i].clo2 <= 120) {
            res[i].clo2 = parseFloat(res[i].clo2).toFixed(2);
            res[i].shadow = "#D8EDD3";
            res[i].solid = "#499D36";
            gCount = gCount + 1;
          }
          else if (res[i].clo2 > 120) {
            res[i].clo2 = parseFloat(res[i].clo2).toFixed(2);
            res[i].shadow = "#FFCCCC";
            res[i].solid = "#FF0000";
            rCount = rCount + 1;
          }

        }
        else {
          res[i].clo2 = 0;
        }
        if (res[i].mode === 'SENSE_ONLY') {
          res[i].modeColor = '#0096FF'
          res[i].icon = "mdi mdi-18px mdi-access-point"
          var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
          var modeIndex = listOfModes.indexOf(res[i].mode);
          listOfModes.splice(modeIndex, 1);
          res[i].listOfModes = listOfModes;

        }
        else if (res[i].mode === 'STANDBY') {
          res[i].modeColor = '#FF8C00'
          res[i].icon = "mdi mdi-18px mdi-power-standby"
          var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
          var modeIndex = listOfModes.indexOf(res[i].mode);
          listOfModes.splice(modeIndex, 1);
          res[i].listOfModes = listOfModes;
        }
        else if (res[i].mode === 'OPERATIONAL') {
          res[i].modeColor = '#800080'
          res[i].icon = "mdi mdi-18px mdi-cog-sync-outline"
          var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
          var modeIndex = listOfModes.indexOf(res[i].mode);
          listOfModes.splice(modeIndex, 1);
          res[i].listOfModes = listOfModes;
        }
        else if (res[i].mode === null) {
          res[i].mode = 'None'
          res[i].modeColor = '#000000'
          res[i].icon = "mdi mdi-18px mdi-radiobox-marked"
          var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
          res[i].listOfModes = listOfModes;

        }

      }
    }
    this.setState({ yellowCount: yCount })
    this.setState({ redCount: rCount })
    this.setState({ greenCount: gCount })
    this.setState({ fleetDeviceMapData: res });

    this.setState({ totalDevices: res.length })

  }

  getModesForContextMenu = () => {
    var res = this.state.fleetDeviceMapData;
    for (let i = 0; i < res.length; i++) {
      if (res[i].mode === 'SENSE_ONLY') {
        res[i].modeColor = '#0096FF'
        res[i].icon = "mdi mdi-18px mdi-access-point"
        var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
        var modeIndex = listOfModes.indexOf(res[i].mode);
        listOfModes.splice(modeIndex, 1);
        res[i].listOfModes = listOfModes;

      }
      else if (res[i].mode === 'STANDBY') {
        res[i].modeColor = '#FF8C00'
        res[i].icon = "mdi mdi-18px mdi-power-standby"
        var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
        var modeIndex = listOfModes.indexOf(res[i].mode);
        listOfModes.splice(modeIndex, 1);
        res[i].listOfModes = listOfModes;
      }
      else if (res[i].mode === 'OPERATIONAL') {
        res[i].modeColor = '#800080'
        res[i].icon = "mdi mdi-18px mdi-office-building-cog-outline"
        var listOfModes = ["SENSE_ONLY", "OPERATIONAL", "STANDBY",];
        var modeIndex = listOfModes.indexOf(res[i].mode);
        listOfModes.splice(modeIndex, 1);
        res[i].listOfModes = listOfModes;
      }
      else if (res[i].mode === null) {
        res[i].mode = 'None'
        res[i].modeColor = '#000000'
        res[i].icon = "mdi mdi-18px mdi-radiobox-marked"
      }
    }
  }

  sendCommand = (mode, selectedDeviceId, udi) => {
    TelemetryApiData.sendCommandForChangeMode(selectedDeviceId, udi, mode).then((res) => {
    });
  }



  refresh5Sec = () => {
    console.log('refresh 5sec started', this.state.value, (this.state.value).length)
    console.log('refresh deviceId :: ', this.state.deviceId);

    if ((this.state.deviceId === "" || this.state.deviceId === null) && ((this.state.value).length === 0) && (this.state.selectedMode === '')) { //0 0 0
      console.log('0-0-0')
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.setState({ value: [] });
      this.getTelemetryData();
    }
    if ((this.state.deviceId === "" || this.state.deviceId === null) && ((this.state.value).length === 0) && (this.state.selectedMode !== '')) { //0 0 1
      console.log('0-0-1', this.state.selectedMode)
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.setState({ value: [] });
      this.getDeviceTelemetryByModeFilter(this.state.selectedMode);
    }
    if (((this.state.value).length === 0) && (this.state.deviceId !== "") && (this.state.selectedMode === '')) { // 0 1 0
      console.log('0-1-0', 'this.state.deviceId', this.state.deviceId)
      this.setState({ refreshState: true });
      this.getDeviceTelemetryByFilter(this.state.deviceId);
    }
    if (((this.state.value).length > 0) && (this.state.deviceId === "") && (this.state.selectedMode === '')) { // 1 0 0
      console.log('1-0-0')
      tempLocationIdsList = [];

      this.setState({ refreshState: true });

      console.log('state--', this.state.refreshState);
      this.getDevicesByLocationFilter(this.state.value);
    }
    if (((this.state.value).length > 0) && (this.state.deviceId === "") && (this.state.selectedMode !== '')) { // 1 0 1
      console.log('1-0-1')
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.getDevicesByLocationFilter(this.state.value);
      this.getDeviceTelemetryByModeFilter(this.state.selectedMode);
    }
    if (((this.state.value).length > 0) && (this.state.deviceId !== "") && (this.state.selectedMode === '')) { //1 1 0
      console.log('1-1-0')
      console.log('onChangeRefresh 1-0 ', this.state.value);
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.getDeviceTelemetryByFilter(this.state.deviceId);


    }
    if (((this.state.value).length === 0) && (this.state.deviceId !== "") && (this.state.selectedMode !== '')) { // 0 1 1
      console.log('0-1-1')
      console.log('onChangeRefresh 1-0 ', this.state.value);
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.getDeviceTelemetryByFilter(this.state.deviceId);
      this.getDeviceTelemetryByModeFilter(this.state.selectedMode);

    }
    if (((this.state.value).length > 0) && (this.state.deviceId !== "") && (this.state.selectedMode !== '')) { // 1 1 1
      console.log('1-1-1')
      console.log('onChangeRefresh 1-0 ', this.state.value);
      this.setState({ refreshState: true });
      tempLocationIdsList = [];
      this.getDevicesByLocationFilter(this.state.value);
      this.getDeviceTelemetryByFilter(this.state.deviceId);
      this.getDeviceTelemetryByModeFilter(this.state.selectedMode);
    }
    console.log('fleetData--', this.state.fleetDeviceMapData)
  }

  componentDidMount() {
    this.setState({ refreshState: true });
    setTimeout(() => {
      this.getTelemetryData();
      this.populateLocationDataTree();
      //this.getLocationData();
    }, 500);

    this.clearIntervalTelemetryData = setInterval(e => this.refresh5Sec(), this.state.refreshIntervalState);
  }

  componentWillUnmount() {
    clearInterval(this.clearIntervalTelemetryData);
  }



  render() {

    const tProps = {
      treeData,
      showArrow: true,
      showSearch: false,
      value: this.state.value,
      data: this.state.data,
      //treeCheckStrictly:true,
      // treeLine:true,s
      onChange: this.onChangeTree,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'All Locations',

      style: {
        width: '100%',
        height: "40px",

      },

    };

    return (

     
      <div className="dashboard-top-align ml-1 mr-1">
        <div className="row mb-2">
          <div className="col">
            <nav aria-label="breadcrumb justify-content-center" style={{ "height": "50px", "textAlign": "center", "lineHeight": "50px" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/single-device">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Fleet Dashboard</b><label><b style={{ "color": "red" }}>.LIVE</b></label>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col mb-2">
            <ul className="list-group list-group-horizontal float-end" style={{ marginRight: "15px" }}>
              <li className="list-group-item border-0">


                <Box sx={{ minWidth: 220 }} >
                  <FormControl size="small" fullWidth>

                    <TreeSelect {...tProps} />
                  </FormControl>
                </Box>
              </li>

              <li className="list-group-item border-0">

                {/* <Box sx={{ minWidth: 220  }} >
                      <FormControl size="small" fullWidth  >
                        <InputLabel id="device-select-label" >Devices</InputLabel>
                        
                       */}
                <Select
                  style={{ width: 240 }}
                  // size="large"
                  placeholder=" Select Devices"
                  labelId="device-select-label"
                  id="device-select"
                  //  defaultValue={['All Devices']}
                  label="Devices"
                  mode="multiple"
                  showArrow
                  onChange={this.handleDeviceFilterChange}

                >

                  <MenuItem value="">
                    <em>All Devices</em>
                  </MenuItem>
                  {this.state.deviceData.map((make, index) => (
                    <MenuItem key={make.deviceId} value={make.deviceId}>{make.nickname}</MenuItem>
                  ))}


                </Select>
                {/*                       
                      </FormControl>
                    </Box> */}


              </li>
              <li className="list-group-item border-0">

                <Box sx={{ minWidth: 220 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="device-mode-label">Modes</InputLabel>
                    <Select
                      labelId="device-mode-label"
                      id="device-mode"
                      label="Modes"
                      onChange={this.handleModeFilterChange} >
                      <MenuItem value="">
                        <em>All Modes</em>
                      </MenuItem>

                      <MenuItem value='OPERATIONAL'>OPERATIONAL</MenuItem>
                      <MenuItem value='SENSE_ONLY'>SENSE ONLY</MenuItem>
                      <MenuItem value='STANDBY'>STANDBY</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
              </li>
              <li className="list-group-item border-0">
                <Dropdown.Button style={{ height: "40px", }} onClick={this.refresh5Sec} overlay={this.menu} placement="bottom" icon={<DownOutlined />}>
                  {this.state.selectedRefreshValue}<SyncOutlined />
                </Dropdown.Button>
              </li>
            </ul>
          </div>

                    
          <div className="row mb-2 ps-3">
            <div className="card widget-flat">
              <div className="card-body ">
                <div className="col-md-12 ">


                  <React.Fragment>

                    
                    <Chart
                      type="bar"
                      width={1349}
                      height={200}
                      series={[
                        {
                          name: "STANDBY",
                          data: [465],
                          color: '#f90000'
                        },
                        {
                          name: "OPERATIONAL",
                          data: [276],
                          // color: '#000000'
                        },
                        {
                          name: "SENSE ONLY",
                          data: [229],
                          // color: '#000000'
                        }
                      

                      ]}

                      options={{
                        title: {
                          text: "Details about the modes"
                        },
                        chart: {
                          stacked: true,
                        },
                        plotOptions: {
                          bar: {
                            horizontal: true,
                            columnWidth: '100%'
                          }
                        },
                        stroke: {
                          width: 1,
                        },
                        xaxis: {
                          // categories: ['jan','feb','mar','apr','may','jun','jul','aug'],
                          title: {
                            text: "Total Modes.."
                          },
                          categories: ['canary']
                        },
                        yaxis: {
                          // categories: ['jan','feb','mar','apr','may','jun','jul','aug'],
                          title: {
                            text: "TOTAL DEVICES"
                          },
                        
                        },
                        legend: {
                          position: 'bottom'
                        },
                        dataLabels: {
                          enabled: true,
                        },
                        grid: {
                          show: true,
                          xaxis: {
                            lines: {
                              show: false
                            }
                          },
                          yaxis: {
                            lines: {
                              show: false
                            }
                          }

                        }

                      }}

                    />
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2 ps-3">
            <div className="card widget-flat">
              <div className="card-body ">
                <div className="col-md-12 ">

                      <ApexChart/>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2 ps-3">
            <div className="card widget-flat">
              <div className="card-body ">
                <div className="col-md-12 ">


                  <React.Fragment>

                    
                    <Chart
                      type="bar"
                      width={1349}
                      height={200}
                      series={[
                        {
                          name: "STANDBY",
                          data: [465],
                          color: '#f90000'
                        },
                        {
                          name: "OPERATIONAL",
                          data: [276],
                          // color: '#000000'
                        },
                        {
                          name: "SENSE ONLY",
                          data: [229],
                          // color: '#000000'
                        }
                      

                      ]}

                      options={{
                        title: {
                          text: "Details about the modes"
                        },
                        chart: {
                          stacked: true,
                        },
                        plotOptions: {
                          bar: {
                            horizontal: true,
                            columnWidth: '100%'
                          }
                        },
                        stroke: {
                          width: 1,
                        },
                        xaxis: {
                          // categories: ['jan','feb','mar','apr','may','jun','jul','aug'],
                          title: {
                            text: "Total Modes.."
                          },
                          categories: ['canary']
                        },
                        yaxis: {
                          // categories: ['jan','feb','mar','apr','may','jun','jul','aug'],
                          title: {
                            text: "TOTAL DEVICES"
                          },
                        
                        },
                        legend: {
                          position: 'bottom'
                        },
                        dataLabels: {
                          enabled: true,
                        },
                        grid: {
                          show: true,
                          xaxis: {
                            lines: {
                              show: false
                            }
                          },
                          yaxis: {
                            lines: {
                              show: false
                            }
                          }

                        }

                      }}

                    />
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>





          <div className="row mb-2 ps-3">
            <div className="card widget-flat">
              <div className="card-body ">
                <div className="col-md-12 ">
                  <label style={{ float: "left" }}><b >Total Devices: </b>{this.state.totalDevices} &nbsp; &nbsp;<span className="legend-dots" style={{ background: "#499D36" }}></span>{this.state.greenCount}   <span className="legend-dots" style={{ background: "#FFED49" }}></span>{this.state.yellowCount}
                    <span className="legend-dots" style={{ background: "#FF0000" }}></span>{this.state.redCount}

                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="justify-content-between align-items-center tab-transparent">

              <div className="row">
                {
                  this.state.fleetDeviceMapData.map((item) => (

                    <div key={item.id} className="col-xl-2 col-lg-6 col-sm-6 grid-margin stretch-card ps-1 mb-2"  >
                      <div className="card"  >
                        <div className="card-body text-center">
                          <div className="dropdown dropdown-arrow-none">
                            <DropdownReact className="dropdown-style-align" >
                              <DropdownReact.Toggle className="btn p-0  float-right text-dark bg-transparent border-0 hide-carret">
                                <i className="mdi mdi-dots-vertical"></i>
                              </DropdownReact.Toggle>
                              <DropdownReact.Menu>
                                <DropdownReact.Item onClick={() => this.sendCommand(item.listOfModes[0], item.id, item.udi)}><i className="mdi mdi-pencil-outline mr-2"></i> Go {item.listOfModes[0]}</DropdownReact.Item>
                                <DropdownReact.Item onClick={() => this.sendCommand(item.listOfModes[1], item.id, item.udi)}><i className="mdi mdi-pencil-outline mr-2"></i> Go {item.listOfModes[1]}</DropdownReact.Item>
                                <DropdownReact.Item onClick={() => this.deviceMetaModalOpen(item.id)}><i className="mdi mdi-eye-outline mr-2"></i> Device Profile </DropdownReact.Item>
                                {/* <DropdownReact.Item><i className="mdi mdi-eye-outline mr-2"></i> Show Alerts </DropdownReact.Item>
                                          <DropdownReact.Item><i className="mdi mdi-eye-outline mr-2"></i> OTA Update </DropdownReact.Item> */}
                              </DropdownReact.Menu>
                            </DropdownReact>
                          </div>

                          <ReactLink className="a-href-highlight-remove" to="/single-device" onClick={() => this.onTrigger(item.id)} ><b style={{ fontSize: "2vh" }}>{item.metadata.name}</b></ReactLink>
                          <div style={{ paddingTop: "1rem", marginBottom: "-1vh" }} className=" mx-3 d-flex align-items-center donutAlign" >
                            <svg width="0" height="0" >
                              <defs>
                                {/* <linearGradient id="progress-order" >
                                        <stop offset="0%" stopColor={item.shadow}/>
                                        <stop offset="100%" stopColor={item.solid}/>
                                      </linearGradient> */}
                              </defs>
                            </svg>

                            <CircularProgressbarWithChildren className="progress-order"
                              value={item.clo2} circleRatio={0.75}
                              styles={buildStyles({ rotation: 1 / 2 + 1 / 8, strokeLinecap: "butt", pathColor: item.solid })}>
                              <div>
                                <label style={{ fontSize: "1.2vw" }} className="mb-0 font-weight-bold mt-2 text-dark">{item.clo2} </label>  <br />
                                <label style={{ fontSize: "0.8vw" }} className="mb-0 font-weight-bold mt-2 text-dark">ppb</label>
                              </div>
                            </CircularProgressbarWithChildren>
                          </div>
                          <h5 className="mb-2 text-dark font-weight-normal"><b>ClO2</b></h5>

                          <label style={{ float: "left" }}><i className={item.icon}></i><b style={{ color: item.modeColor }}>  {item.mode}</b> </label>


                          {this.state.refreshState === true ? <img src={require('../assets/images/refresh-gif.gif')} style={{ height: "2.5vh", float: "right" }} alt="logo" />
                            : <img src={require('../assets/images/refresh-blank.png')} style={{ height: "2.5vh", float: "right" }} alt="logo" />}
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
          <div>
            <DeviceMeta open={this.state.open} metadata={this.state.deviceMetaData} parentCallback={this.handleResponseModal} />
          </div>
        </div>
      </div>
    );
  }
}
export default Devices;