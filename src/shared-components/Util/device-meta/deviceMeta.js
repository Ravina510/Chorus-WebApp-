import * as React from 'react';
import './deviceMeta.scss';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TelemetryApiData from "../../../dashboard/services/telemetryApiData";
import { TreeSelect, Space } from 'antd';

var moment = require('moment'); // require
var floorDataList =[];
const treeLine = true;
const showLeafIcon = true;
var leafNodesMap =[];
var tempLeafNodesMap = [];
var parentNodeMap =[];
var leafNodeResultList=[];
var childrenData =[];
var treeData = [];

let tempLocationList = [];
let defaultLocationValue = "";
const { SHOW_PARENT } = TreeSelect;

export class DeviceMeta extends React.Component {
constructor(props){
 
super(props)
this.state = {      
  open:false,
  nickNameTextField:"",
  locationTextField:"",
  editableTextField:false,
  locationDeviceId:"",
  propsLocationValue:"",
  locationEditCalled:false,
  leafMap:{},
  value: [],
  parentDataState:{},
  data:[],
};
  leafNodeResultList=[];
  childrenData=[];
}

deviceMetaModalClose = () =>{
    console.log('close clicked:: ');
    this.setState({open:false});
    this.setState({editableTextField:false});
    this.props.parentCallback(false);
}

onCancel = () =>{
  if(this.state.editableTextField == true){
    this.setState({editableTextField:false});
  }else{
    this.setState({open:false});
    this.props.parentCallback(false);
  }
}

onSubmit = () =>{
  let hierarchyResult = '';
    console.log('onSubmit clicked:: ');
    this.setState({open:false});
    this.setState({editableTextField:false});

    if(this.state.locationEditCalled == true){
      if(tempLocationList[0] == null || tempLocationList[0].length == 0 || tempLocationList[0] == []){     //if none selected in location hierarchy
        console.log("if -tempLocationList = null");
        var tempLocationDeviceId = "";
      }else{
        console.log("else -tempLocationList = not null")
        var tempLocationDeviceId = tempLocationList[tempLocationList.length-1];
        //console.log('tempLocationList length',tempLocationList.length)
    for(let i=0;i<tempLocationList.length;i++){
      console.log('tempLocationList[i]',tempLocationList[i])
      if(tempLocationList[i].length === 0){    //None
        hierarchyResult = "";
      } 
      else{
        hierarchyResult=hierarchyResult.concat('#'+tempLocationList[i]);
      }
    }
      }
      this.setState({locationEditCalled:false});
    }else{
      var tempLocationDeviceId = this.state.locationDeviceId;
      tempLocationList = [];
      tempLocationList = this.props.metadata.locationIds;
      
    }
   
    
   

    console.log('Final nickNameTextField Data:: ',this.state.nickNameTextField);
    console.log('Previous locationId:: ',this.state.locationDeviceId);
    console.log('After update locationId:: ',tempLocationDeviceId);
    console.log('Previous locationIds:: ',this.props.metadata.parentHierarchy);
    console.log('After update locationIds:: ',tempLocationList);

    console.log('Strin After update locationIds:: ',hierarchyResult);

    TelemetryApiData.updateNickName(this.props.metadata.id,this.state.nickNameTextField,tempLocationDeviceId,this.props.metadata._version,hierarchyResult).then((responseUpdateMeta) => {
        console.log('responseUpdateMeta:: ',responseUpdateMeta);
    });
    this.props.parentCallback(false);
}

editMetaData = () =>{
this.populateLocationDataTree();
this.setState({editableTextField:true});
}

componentDidMount(){
  console.log('Component Mounting here:: ');
}

componentWillReceiveProps(props){
    //console.log('open clicked:: ');
    //console.log('open data: ',this.state.open);
    this.setState({ open: props.open });
    this.setState({nickNameTextField:props.metadata.name});
    this.setState({locationTextField:props.metadata.location});
    this.setState({locationDeviceId:props.metadata.locationId});

    if(props.metadata.location != undefined){
      if(props.metadata.location == "None"){
        this.setState({propsLocationValue:"None"});
      }else{
        this.setState({propsLocationValue:props.metadata.location.value});
      }
    }
}


async populateLocationDataTree (){
    var resultTreeHierarchyList = [];  
    treeData = [];  
    leafNodesMap = [];
    tempLeafNodesMap = [];
    parentNodeMap = []
    await TelemetryApiData.getLocationByFilter().then((locationByFilter) => {   
      for(let i=0;i<locationByFilter.length;i++){
        if(locationByFilter[i].parentID !== '0' && locationByFilter[i].parentID !== null){        
          leafNodesMap.push({"title":locationByFilter[i].value,"data":locationByFilter[i].id,"parentID":locationByFilter[i].parentID});
          console.log('leafNodesMap',leafNodesMap)  
        }
        else{
          var listSize = parentNodeMap.length;
          parentNodeMap.push({"title":locationByFilter[i].value,"value":listSize.toString(),"key":listSize.toString(),"data":locationByFilter[i].id,"parentID":locationByFilter[i].parentID});  
        }         
      }
      for( let i = 0;i<parentNodeMap.length;i++){ 
      var populatedFloorList = [];
      populatedFloorList = this.getFloors(parentNodeMap[i].data,i);
      floorDataList =[];         
      resultTreeHierarchyList.push({"title":parentNodeMap[i].title,"value":(i.toString()),"key":(i.toString()),"children":populatedFloorList,"data":parentNodeMap[i].data,"isParent":true});
      populatedFloorList = [];
      }
      resultTreeHierarchyList.push({"title":"None","value":(parentNodeMap.length),"key":(parentNodeMap.length),"children":[],"data":[],"isParent":true}); 
    })     
      console.log('treeData after loop',resultTreeHierarchyList);
      treeData=resultTreeHierarchyList;
      this.getValueByLocationId(this.state.locationDeviceId); //setting def. loc. initially-device        
}  
getFloors = (rootNodeParentId,nodeIndex) =>{  
  for(let j=0;j<leafNodesMap.length;j++){  //building 1       
    if(rootNodeParentId === leafNodesMap[j].parentID){           
     let floorListSize = floorDataList.length;
     var floorId =leafNodesMap[j].data;
     var populatedWingList = [];         
     populatedWingList = this.getWing(floorId,nodeIndex,floorListSize);         
     floorDataList.push({"title":leafNodesMap[j].title,"value":(nodeIndex+'-'+floorListSize).toString(),"key":(nodeIndex+'-'+floorListSize).toString(),"data":leafNodesMap[j].data,"parentID":leafNodesMap[j].parentID,"children":populatedWingList});
    }             
  }  
  return floorDataList;           
}

  

getWing = (floorId,nodeIndex,floorListSize) => {
  var wingDataList = [];   
  for(let i=0;i<leafNodesMap.length;i++){   
      if(floorId === leafNodesMap[i].parentID){ 
          let wingListSize = wingDataList.length;
          var wingId =leafNodesMap[i].data;
          var populatedRoomList = [];         
          populatedRoomList = this.getRooms(nodeIndex,wingId,floorListSize,wingListSize); 
          wingDataList.push({"title":leafNodesMap[i].title,"value":(nodeIndex+'-'+floorListSize+'-'+wingListSize).toString(),"key":(nodeIndex+'-'+floorListSize+'-'+wingListSize).toString(),"data":leafNodesMap[i].data,"parentID":leafNodesMap[i].parentID,"children":populatedRoomList});  //Room 1, Room2   
      }          
  }      
  return wingDataList;
} 

getRooms = (nodeIndex,wingId,floorListSize,wingListSize) => {
  var roomDataList = [];   
  for(let i=0;i<leafNodesMap.length;i++){              
      if(wingId === leafNodesMap[i].parentID){ 
          let roomListsize = roomDataList.length;
          roomDataList.push({"title":leafNodesMap[i].title,"value":(nodeIndex+'-'+floorListSize+'-'+wingListSize+'-'+roomListsize).toString(),"key":(nodeIndex+'-'+floorListSize+'-'+wingListSize+'-'+roomListsize).toString(),"data":leafNodesMap[i].data,"parentID":leafNodesMap[i].parentID,"children":[]});  //Room 1, Room2            
      }          
  }      
  return roomDataList;
} 

onChangeTree = (value) => {
  console.log('onChange ', value);
  this.setState({locationEditCalled:true});
  this.setState({ value });
  tempLocationList=[];
  this.getIdByLocationValue([value]);
};
getIdByLocationValue(value){
  console.log('valueeee:: ',value)
  for(let x=0;x<value.length;x++){
    for(let i=0;i<treeData.length;i++){ 
      console.log('tree:', treeData);
      console.log('treeData[i].value]:: ',treeData[i].value);
      if(value[x] === treeData[i].value){ //root
        tempLocationList.push(treeData[i].data);         
      }
      for(let j=0;j<treeData[i].children.length;j++){ //wing
        if(value[x] === treeData[i].children[j].value){
          tempLocationList.push(treeData[i].data);
          tempLocationList.push(treeData[i].children[j].data);
        }
    
        for(let k=0;k<treeData[i].children[j].children.length;k++){  //floor
          if(value[x] === treeData[i].children[j].children[k].value){
            tempLocationList.push(treeData[i].data);
            tempLocationList.push(treeData[i].children[j].data);
            tempLocationList.push(treeData[i].children[j].children[k].data); 
          }
          for(let l=0;l<treeData[i].children[j].children[k].children.length;l++){     //room
            if(value[x] === treeData[i].children[j].children[k].children[l].value){    
              tempLocationList.push(treeData[i].data);
              tempLocationList.push(treeData[i].children[j].data);
              tempLocationList.push(treeData[i].children[j].children[k].data);      
              tempLocationList.push(treeData[i].children[j].children[k].children[l].data);           
            }
          }
        }
      }
    }   
  }
    console.log('tempList:',tempLocationList);
}
 
getValueByLocationId(locationId){
  if(locationId == null || locationId == ""){
    defaultLocationValue = treeData[treeData.length-1].value;
  }
  for(let i=0;i<treeData.length;i++){ 
    console.log('tree:', treeData);
    if(locationId === treeData[i].data){ //building
      defaultLocationValue = treeData[i].value;         
    }
    for(let j=0;j<treeData[i].children.length;j++){ //wing
      if(locationId === treeData[i].children[j].data){
        defaultLocationValue = treeData[i].children[j].value;
      }
      for(let k=0;k<treeData[i].children[j].children.length;k++){  //floor
        if(locationId === treeData[i].children[j].children[k].data){
          defaultLocationValue = treeData[i].children[j].children[k].value; 
        }
        for(let l=0;l<treeData[i].children[j].children[k].children.length;l++){  //room
          if(locationId === treeData[i].children[j].children[k].children[l].data){
            defaultLocationValue = treeData[i].children[j].children[k].children[l].value; 
          }
        }
      }
    }
  } 
  console.log('default Location Value:: ',defaultLocationValue);
  var valueForDefaultLocation = [];
  valueForDefaultLocation.push(defaultLocationValue);
  this.setState({value:valueForDefaultLocation});
}


render () {
return (
    <div style={{position:"relative"}}>
        <BootstrapDialog
            onClose={this.deviceMetaModalClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" className="header-bg-color" onClose={this.deviceMetaModalClose}>  
              {this.state.editableTextField === true ? "Edit Device Profile" : "View Device Profile"} <span className="badge red">New</span>
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <div style={{display:"inline"}}>
                        <span style={{float:"left",width:"45%",fontSize:"17px"}}>        
                          {this.state.editableTextField === true ? <div><b>Nickname: </b> <TextField id="outlined-basic" variant="outlined" label=" " InputLabelProps={{shrink: false}} size="small" 
                            defaultValue={this.props.metadata.name} onChange={(e) => this.setState({nickNameTextField:e.target.value})}/><br/></div>
                          : <div><b>Nickname: </b>{this.props.metadata.name}</div>}<br/>
                            <div><b>Thing Name: </b>{this.props.metadata.udi}</div><br/>
                            <div><b>Status: </b>{this.props.metadata.status}</div><br/>                                    
                        </span>
                        <span style={{float:"right",width:"39%",fontSize:"17px"}}>
                          { this.state.editableTextField === true ?
                            <div><b>Location: </b>
                              <Space direction="vertical" style={{width:"13rem"}}>
                                <TreeSelect
                                    style={{ width: '100%' }}
                                    size="large"
                                    value={this.state.value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto',zIndex:"100000" }}
                                    treeData={treeData}
                                    placeholder="Please select"
                                    treeDefaultExpandAll
                                    onChange={this.onChangeTree}
                                    treeLine={
                                        treeLine && {
                                        showLeafIcon,
                                        }
                                    }
                                />
                              </Space><br/>
                            </div>
                              
                          : <div><b>Location: </b>{this.state.propsLocationValue}</div>}<br/>  
                            <div><b>Type: </b> {this.props.metadata.type}</div><br/>
                            <div><b>Last Updated: </b> {moment(this.props.metadata.updatedAt).local().format('YYYY-MM-DD HH:mm:ss')}</div><br/>                    
                        </span>
                    </div>    
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.onCancel} >Back</Button>
            { this.state.editableTextField === true ? <Button autoFocus onClick={this.onSubmit}>Save</Button>
                                  : <Button onClick={this.editMetaData} >Edit</Button>}
            </DialogActions>
        </BootstrapDialog>
    </div>    
)
}
}  

export default DeviceMeta;


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
          <i className="mdi mdi-close"></i>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };