import React from 'react'
         
import '../../App.css';    
// import TelemetryApiData from "../dashboard/services/telemetryApiData.js"; 
var modeColorState = null;
export class DeviceDetails extends React.Component {   

    constructor(props){
        super(props);
        this.state = {
          
        }
    }

   
   getModeColor=()=>{
     //console.log('called',this.props)
     modeColorState ='';
     if(this.props.Mode === 'SENSE_ONLY'){
      modeColorState ='#0096FF';
     
     }
       else if(this.props.Mode === 'STANDBY'){
      modeColorState='#FF8C00';
       }
       else if(this.props.Mode === 'OPERATIONAL'){
        modeColorState='#800080';
       }
       
       //console.log('modeColorState',modeColorState);
     }

   
  
     componentWillReceiveProps(props){
      
      this.getModeColor();    
   
  }

    render() {
        return(  
          
          
            <label style={{float:"left"}}><b >Nickname: </b><label style={{color:"#0096FF"}}> {this.props.Name}  </label>  &nbsp; &nbsp; <b>Location:  </b><label style={{color:"#0096FF"}}> {this.props.Location} </label>    </label>         
           

        )
    }
}

export default DeviceDetails;