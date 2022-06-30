
import React, { useState ,useEffect} from "react";
import { DataGrid ,GridToolbar,GridValueFormatterParams  } from '@mui/x-data-grid';
import TelemetryApiData from '../dashboard/services/telemetryApiData'



import clsx from "clsx";
import { createTheme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

const StripedTable = (props) => {

    const columns = [
        { field: 'id', headerName: 'Event UUID', minWidth:300 , align:'left', fontWeight:'700'
        },
        // { field: 'deviceId', headerName: 'Device UUID', minWidth:300 , align:'left', fontWeight:'700'
        // },
       
        { field: 'clo2.value', headerName: 'ClO2 (ppb)', accessor: "clo2",minWidth: 100 ,align:'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "clo2").value.toFixed(2);
          },
        },
        {
          field: 'humidity.value', headerName: 'Humidity (%)', accessor: "humidity", minWidth: 100, align: 'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "humidity").value.toFixed(2);
          }
        },
        {
          field: 'temperature.value', headerName: 'Temp (°C)', accessor: "temperature", minWidth: 100, align: 'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "temperature").value.toFixed(2);
          }
        },
        {
          field: 'barometricPressure.value', headerName: 'Baro. P (mbar)', accessor: "barometricPressure", minWidth: 120, align: 'center',
          valueGetter: (params) => {
            let baroP = params.getValue(params.id, "barometricPressure").value * 0.02953;
            return baroP.toFixed(2);
          }
        },
        {
          field: 'cartridgeLevel',
          headerName: 'Cartridge Level (%)',
          accessor: "cartridgeLevel",
          renderCell: renderProgress,
          minWidth: 150,
          align: 'center',
          valueGetter: (params) => {            
          //  return  params.getValue(params.id, "device").cartridgeLevel.toFixed(2);
          return Math.floor(Math.random() * (98 - 96 + 1)) + 96;
          }
        },
        { field: 'generated', headerName: 'Generated', accessor: "generated",minWidth: 100 ,align:'center',
        // valueGetter: (params) => {
        //   return params.getValue(params.id, "lastShotSize").value;
        // },
      },
      { field: 'lastShotSize.value', headerName: 'Shot Size (μL)', accessor: "lastShotSize",minWidth: 100 ,align:'center',
        valueGetter: (params) => {
          return params.getValue(params.id, "lastShotSize").value;
        },
      },
        {
          field: 'eventDate',
          headerName: 'Timestamp',
          accessor: "eventDate",
          minWidth: 200,
          maxWidth: 200,
          align: 'left'
        },
      ];

      const deviceEventColumns = [
        { field: 'id', headerName: 'Event UUID', minWidth:300 , align:'left', fontWeight:'700'
        },
        { field: 'name', headerName: 'Nickname', accessor: "name",minWidth: 100 ,align:'center',
        valueGetter: (params) => {
          return params.getValue(params.id, "device").metadata.name;
        },
      },
        { field: 'deviceId', headerName: 'Device UUID', minWidth:300 , align:'left', fontWeight:'700'
        },
        
       
       
        {
          field: 'humidity.value', headerName: 'Humidity (%)', accessor: "humidity", minWidth: 100, align: 'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "humidity").value.toFixed(2);
          }
        },
        {
          field: 'temperature.value', headerName: 'Temp (°C)', accessor: "temperature", minWidth: 100, align: 'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "temperature").value.toFixed(2);
          }
        },
        {
          field: 'barometricPressure.value', headerName: 'Baro. P (mbar)', accessor: "barometricPressure", minWidth: 120, align: 'center',
          valueGetter: (params) => {
            let baroP = params.getValue(params.id, "barometricPressure").value * 0.02953;
            return baroP.toFixed(2);
          }
        },
        {
          field: 'cartridgeLevel',
          headerName: 'Cartridge Level (%)',
          accessor: "cartridgeLevel",
          renderCell: renderProgress,
          minWidth: 150,
          align: 'center',
          valueGetter: (params) => {            
          //  return  params.getValue(params.id, "device").cartridgeLevel.toFixed(2);
          return Math.floor(Math.random() * (98 - 96 + 1)) + 96;
          }
        },
        { field: 'generated', headerName: 'Generated', accessor: "generated",minWidth: 100 ,align:'center',
          // valueGetter: (params) => {
          //   return params.getValue(params.id, "lastShotSize").value;
          // },
        },
        { field: 'lastShotSize.value', headerName: 'Shot Size (μL)', accessor: "lastShotSize",minWidth: 100 ,align:'center',
          valueGetter: (params) => {
            return params.getValue(params.id, "lastShotSize").value;
          },
        },
      
        {
          field: 'eventDate',
          headerName: 'Timestamp',
          accessor: "eventDate",
          minWidth: 200,
          maxWidth: 200,
          align: 'left'
        },
      ];
      // const [rows, setRowDataforTelemetry] = useState([]);
    
    const defaultTheme = createTheme();

    const useStyles = makeStyles(
      (theme) =>
        createStyles({
          root: {
            border: `1px solid ${theme.palette.divider}`,
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: 22,
            borderRadius: 10
          },
          value: {
            position: "absolute",
            lineHeight: "22px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          },
          bar: {
            height: "100%",
            "&.low": {
              backgroundColor: "#f44336"
            },
            "&.medium": {
              backgroundColor: "#efbb5aa3"
            },
            "&.high": {
              backgroundColor: "#088208a3"
            }
          }
        }),
      { defaultTheme }
    );
    
    
      const ProgressBar = React.memo(function ProgressBar(props) {
        const { value } = props;
        const valueInPercent = value;
        const classes = useStyles();
      
        return (
          <div className={classes.root}>
            <div
              className={classes.value}
            >{`${valueInPercent.toLocaleString()} %`}</div>
            <div
              className={clsx(classes.bar, {
                low: valueInPercent < 30,
                medium: valueInPercent >= 30 && valueInPercent <= 70,
                high: valueInPercent > 70
              })}
              style={{ maxWidth: `${valueInPercent}%` }}
            />
          </div>
        );
      });
    

      const datagridSx = {        
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#F5F5F5",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700
        },
        "& .MuiDataGrid-toolbarContainer": {
          float: "right"
        },
      };

      function renderProgress(params) {
        return <ProgressBar value={Number(params.value)} />;
      }

    useEffect(() => {
    }, [])
    
      if(props.title == 'DeviceEventsReport')
      {
        return (
          <div className="">
            <div className="d-sm-flex justify-content-between align-items-start" >   
            { props.state === true ?<img src={require('../assets/images/refresh-gif.gif')} style={{height: "2.5vh",marginTop:"-5px",float:"right"}} alt="logo" />: <label></label>}     
            </div>               
            <DataGrid  autoHeight {...props.DeviceTelemetryData}   autoWidth {...deviceEventColumns}
                  rows={props.DeviceTelemetryData}
                  columns={deviceEventColumns}
                  density="compact"
                  components={{
                    Toolbar: GridToolbar,
                  }}
                  initialState={{
                    sorting: {
                      sortModel: [{ field: 'eventDate', sort: 'desc' }],
                    },
                  }}
                  sx={datagridSx}
                  pageSize={25}
                  rowsPerPageOptions={[25]}
                  checkboxSelection
                  disableSelectionOnClick
            />                           
          </div> 
        )
      }
      else{
        return (
          <div className="">
            <div className="d-sm-flex justify-content-between align-items-start" >
            <h6 className="text-dark font-weight-bold">Event Log</h6>
            { props.state === true ?<img src={require('../assets/images/refresh-gif.gif')} style={{height: "2.5vh",marginTop:"-5px",float:"right"}} alt="logo" />: <label></label>}   

            </div>               
            <DataGrid  autoHeight {...props.DeviceTelemetryData}   autoWidth {...columns}
                  rows={props.DeviceTelemetryData}
                  columns={columns}
                  initialState={{
                    sorting: {
                      sortModel: [{ field: 'eventDate', sort: 'desc' }],
                    },
                  }}
                  sx={datagridSx}
                  pageSize={10}
            />                           
          </div> 
        )
      }
}   
export default StripedTable;
   