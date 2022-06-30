import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth, Signer } from 'aws-amplify';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import axios from 'axios';
import { listLocations, queryDevicesByAccId, queryHistoricalTelemetryByDevIdAccIdTime, queryCurrentTelemetryByDevIdAccId, queryDeviceForLocationDevicesId,
    listLocationsByAccId,queryHistoricalTelemetryForReports} from '../../graphql/queries';
import {updateDeviceMetadata} from '../../graphql/mutations';

const getAuthToken = () => 'custom-authorized';
const lambdaAuthToken = getAuthToken();    
var accountId = '';
var moment = require('moment'); // require
var base64 = require('base-64');
var listOfDeviceTelemetryData = [];
class TelemetryApiData {
    async getCurrentUser() {
        console.log("getCurrentUser()");
        try{
            const userProfileData = await Auth.currentAuthenticatedUser();
            console.log("User group of logged-in user: ",userProfileData.signInUserSession.accessToken.payload['cognito:groups']);
            console.log("Username of logged-in user: ",userProfileData.username);
            accountId = userProfileData.signInUserSession.accessToken.payload['cognito:groups'][0]

            //accountId = userProfileData.signInUserSession.accessToken.payload['cognito:groups']
            //this.setState({tenantNameState:userProfileData.signInUserSession.accessToken.payload['cognito:groups']});
            console.log("set state tenantNameState:",accountId);
            return userProfileData;
        }catch(err) {
            console.log(err);
            console.log("inside getCurrentUser catch");
        }

    }


    //get list of unique locations
    async getLocationByFilter(){
        console.log('getLocationByFilter()');
        try {
            const locations = await API.graphql({query:listLocationsByAccId(accountId),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken})
            const locationsMapData = locations.data.listLocations.items;
            return locationsMapData;
          }
        catch (err) { 
            console.log('Error Occured getLocationByFilter:: ',err); return null; 
        }
    }

    //get list of devices for particular accountId (tenant)
    async getDevicesByAccId(){
        //console.log('getDevicesByAccId()',accountId);
        try {
            const deviceTelemetry = await API.graphql({query:queryDevicesByAccId(accountId),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken})
            const deviceList = deviceTelemetry.data.listDevices.items;
            const deviceListSort = deviceList.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0));
            console.log("getDevicesByAccId::deviceListSort: ",deviceListSort);
            return deviceListSort;
        } catch (err) { 
              console.log('Error Occured getDevicesByAccId:: ',err); return null; 
        }
    }

    //get history telemetry for reports and also for TS chart & data-grid
    async getHistoricalTelemetryByDevIdAccIdTime(deviceId,fromTime,currentTime,limit){
        var telemetryDataChunk = [];
        var telemetryDataForReports = [];
        var deviceList = [];
        let nextToken = '';

        try{
            var _tempStartDateTime = moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
                nextToken = '';
                telemetryDataChunk = [];
                telemetryDataChunk = await API.graphql(({query:queryHistoricalTelemetryForReports(deviceId,accountId,fromTime,currentTime,limit,nextToken),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken}));
                telemetryDataForReports.push.apply(telemetryDataForReports,telemetryDataChunk.data.deviceTelemetryByDate.items);
                console.log("Deep dived and got first chunk for device: ", deviceId, "with limit: ",limit," of size: ",telemetryDataForReports.length); 
                nextToken = telemetryDataChunk.data.deviceTelemetryByDate.nextToken; 
                while(nextToken!=null){
                    console.log("Deep dive for more data at: ",moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z", "with limit: ",limit); 
                    telemetryDataChunk = [];
                    telemetryDataChunk = await API.graphql(({query:queryHistoricalTelemetryForReports(deviceId,accountId,fromTime,currentTime,limit,nextToken),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken})); 
                    console.log("Got next chunk with total records: ",telemetryDataChunk.data.deviceTelemetryByDate.items.length);
                    console.log("Fetched list: ",telemetryDataChunk.data.deviceTelemetryByDate.items); 
                    nextToken = telemetryDataChunk.data.deviceTelemetryByDate.nextToken;
                    telemetryDataForReports.push.apply(telemetryDataForReports,telemetryDataChunk.data.deviceTelemetryByDate.items);
                }

          console.log("Got all records: ",telemetryDataForReports.length, "in: ",moment(moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z").diff(moment(_tempStartDateTime),'minutes'), " minutes");
          for(var i=0;i<telemetryDataForReports.length;i++){
            telemetryDataForReports[i].eventDate = moment(telemetryDataForReports[i].eventDate).local().format('YYYY-MM-DD HH:mm:ss');
          }
          return telemetryDataForReports;
        }
        catch(err){ console.log('Error Occured :: getHistoricalTelemetryForReports:: ', err); return null; };
    }

     //get history telemetry for reports and also for TS chart & data-grid
     async getHistoricalTelemetryForReports(fromTime,currentTime,limit){
        var telemetryDataChunk = [];
        var telemetryDataForReports = [];
        var deviceList = [];
        let nextToken = '';

        try{
            await this.getDevicesByAccId().then((getDeviceListForAccount) => {
                deviceList = getDeviceListForAccount;
            });
            var _tempStartDateTime = moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z";
            for(var i=0;i<deviceList.length;i++){
                nextToken = '';
                telemetryDataChunk = [];
                telemetryDataChunk = await API.graphql(({query:queryHistoricalTelemetryForReports(deviceList[i].id,accountId,fromTime,currentTime,limit,nextToken),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken}));
                telemetryDataForReports.push.apply(telemetryDataForReports,telemetryDataChunk.data.deviceTelemetryByDate.items);
                console.log("Deep dived and got first chunk for device: ", deviceList[i].id, "with limit: ",limit," of size: ",telemetryDataForReports.length); 
                nextToken = telemetryDataChunk.data.deviceTelemetryByDate.nextToken; 
                while(nextToken!=null){
                    console.log("Deep dive for more data at: ",moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z", "with limit: ",limit); 
                    telemetryDataChunk = [];
                    telemetryDataChunk = await API.graphql(({query:queryHistoricalTelemetryForReports(deviceList[i].id,accountId,fromTime,currentTime,limit,nextToken),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken})); 
                    console.log("Got next chunk with total records: ",telemetryDataChunk.data.deviceTelemetryByDate.items.length);
                    console.log("Fetched list: ",telemetryDataChunk.data.deviceTelemetryByDate.items); 
                    nextToken = telemetryDataChunk.data.deviceTelemetryByDate.nextToken;
                    telemetryDataForReports.push.apply(telemetryDataForReports,telemetryDataChunk.data.deviceTelemetryByDate.items);
                }
          
        }
          console.log("Got all records: ",telemetryDataForReports.length, "in: ",moment(moment().utc().format("yyyy-MM-DDTHH:mm:ss.SSS")+"Z").diff(moment(_tempStartDateTime),'seconds'), " seconds");
          for(var i=0;i<telemetryDataForReports.length;i++){
            telemetryDataForReports[i].eventDate = moment(telemetryDataForReports[i].eventDate).local().format('YYYY-MM-DD HH:mm:ss')
          }
          return telemetryDataForReports;
        }
        catch(err){ console.log('Error Occured :: getHistoricalTelemetryForReports:: ', err); return null; };
    }
    
    //get current telemetry on donuts and device details on breadcrumb
    async getCurrentTelemetryByDevIdAccId(deviceId){
        try{
            const currentTelmetryByDeviceId = await API.graphql(({query:queryCurrentTelemetryByDevIdAccId(accountId,deviceId),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken}));
            const currentTelmetryList  = currentTelmetryByDeviceId.data.listDevices.items;
            // for(var i=0;i<telemetryList.length;i++){
            //     telemetryList[i].eventDate = moment(telemetryList[i].eventDate).local().format('YYYY-MM-DD HH:mm:ss')
            // }
            return currentTelmetryList;
        }catch(err){ console.log('Error Occured :: getCurrentTelemetryByDevIdAccId() ', err); return null; };
    }

    async getDevicesByLocationFilter(locationDevicesId){
        try {
            const deviceList = await API.graphql({query:queryDeviceForLocationDevicesId(locationDevicesId,accountId),authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken})
            const deviceListMapData = deviceList.data.listDevices.items;
           
            return deviceListMapData;
          } catch (err) { console.log('Error Occured getDevicesByLocationFilter:: ',err); return null; }
    }

    //update nickname
    async updateNickName(deviceId,nickName,locationDevicesId,version,hierarchyResult){
        console.log('updateNickName--> ',deviceId,' nickName-->',nickName,
        ' locationId-->',locationDevicesId,' version-->',version,' locationIdsList-->',hierarchyResult);
        try{
            const inputData = {id:deviceId,_version:version,name:nickName,locationId:locationDevicesId,parentHierarchy:hierarchyResult};
            const updateResponse = await API.graphql({ query: updateDeviceMetadata, variables: {input: inputData},authMode: 'AWS_LAMBDA',authToken: lambdaAuthToken});
            console.log('updateResponseData:: ',updateResponse);
            return updateResponse;
          
        //    return null;
        }catch(err) {console.log('Error Occured :: updateNickName() ',err); return null;}
    }
    
    // sign a request using Amplify Auth and Signer
    async signRequest(url, method, service, region, data) {
        try {
        const essentialCredentials = Auth.essentialCredentials(await Auth.currentCredentials());
  
        const params = { 
          method, 
          url, 
          headers: { 
          'Content-Type': 'application/json'
          },
          data: JSON.stringify(data) 
        };
  
        const credentials = {
            secret_key: essentialCredentials.secretAccessKey,
            access_key: essentialCredentials.accessKeyId,
            session_token: essentialCredentials.sessionToken,
        };
        // set your region and service here
        const serviceInfo = {region, service};
        // Signer.sign takes care of all other steps of Signature V4
        return Signer.sign(params, credentials, serviceInfo);
  
        }catch(err){ console.log('Error Occured signRequest:: ',err); return null; }
    }
  
    async sendCommandForChangeMode(deviceId,Udi,mode) {
        console.log('deviceId:: ',deviceId,'-Udi:: ',Udi,"-mode:: ",mode);
        try {
            const inputCommandForDevices = {
            "deviceUUID": deviceId,
            "deviceName": Udi,
            "data": {
                "deviceTargetMode": mode
            }
            }

            let region_name = "us-east-2"
            const url = 'https://rygyl0rgr1.execute-api.us-east-2.amazonaws.com/dev/device/'+deviceId+'/command';

            const signedRequest = await this.signRequest(url, "POST", "execute-api", region_name, inputCommandForDevices);
            const response = await fetch(signedRequest.url, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: signedRequest.headers,
            referrer: 'client',
            body: signedRequest.data
            });

            if (response.ok) {
            return response.json();
            } else {
            throw new Error("Failed Request");
            }
        }catch(err){ console.log('Error Occured sendCommandForChangeMode:: ',err); return null; }
    }
}

export default new TelemetryApiData()