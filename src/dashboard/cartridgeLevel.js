import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { relativeTimeRounding } from "moment";
import { Hidden } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
      <h6 style={{float:"left"}} className="mb-2 text-dark font-weight-bold">Cartridge&nbsp;&nbsp;</h6>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 40, mr: 1 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



export class LinearWithValueLabel extends React.Component {   

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

render(){
    const cartridgeLevel= Math.floor(Math.random() * (98 - 96 + 1)) + 96;;
  return (
    
   
      <LinearProgressWithLabel  sx={{ height:"30px", borderRadius:"10px"}} color="success" value={cartridgeLevel} />

    
   
  );
}
}
export default LinearWithValueLabel;
