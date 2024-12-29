import { Box, Button, Stack,  } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";

import Hedar from "../../Components/Hedar";


export default function Dashboard() {

  return (
    <div>
    <Stack direction={"row"}justifyContent={"space-between"}alignItems={"center"}>
   <Hedar titel={"DASHBOARD"} suptitel={"welcome to your dashboard"}isDahbord={true}/>
    <Box sx={{textAlign:"right",mb:1.3}}>
    <Button style={{padding:" 6px 8px",textTransform:"capitalize"}} variant="contained" color="primary"> 
    <DownloadOutlined/>
    Download Reports
    </Button>   
    </Box>  
    </Stack>
    <Row1 /> 
    <Row2/>
    <Row3 />
    </div>
  )
}
