import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import { rows } from './Data.jsx';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import Hedar from '../../Components/Hedar.jsx';

export default function Team() {
  const theme = useTheme();
  <Hedar titel={"dashboard"} suptitel={"welcome to your dashboard"}/>


  const columns = [
    { field: 'ID', headerName: 'ID', flex: 1, align: "center", headerAlign: "center" },
    { field: 'Name', headerName: 'Name', flex: 1, align: "center", headerAlign: "center" },
    { field: 'Email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'Age', headerName: 'Age', flex: 1, align: "center", headerAlign: "center" },
    { field: 'Phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
    {
      field: 'Access',
      headerName: 'Access',
      flex: 1,
      width:"100%",
      aling:"center",
      headerAlign:"center",
      renderCell: (params) => {
        
        const accesslevels = params.row.Access;
        return (
          <div style={{width:"100%",display:'flex', alignItems:"center", justifyContent :"center"}}>
          
          <Box sx={{
            p:"5px",
            width:"99px",
            borderRadius :"3px",
            textAlign:"center",
            display:"flex",
            justifyContent :"space-evenly",
            alignItems:"center",
            m:1,

            background: accesslevels === "Admin" ? theme.palette.primary.dark : accesslevels === "Manager" ? theme.palette.secondary.dark : "#3da58a",
          }}>
          
          
          
            {accesslevels === "Admin" && <AdminPanelSettingsOutlined sx={{color:'#fff' }} />}
            {accesslevels === "Manager" && <SecurityOutlined sx={{color:'#fff' }} />}
            {accesslevels === "user" && <LockOpenOutlined sx={{color:'#fff' }} />}
            <Typography sx={{ fontSize: "13px",  color: "#fff" }}>{accesslevels}</Typography>
          </Box>
          </div>
        );
      }
    }
  ];

  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto", }}>
      <Hedar titel={"TEAM"} suptitel={"Managing the Team Members"}/>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
