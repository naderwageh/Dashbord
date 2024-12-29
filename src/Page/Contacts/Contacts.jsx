
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box,  } from '@mui/material';
import { rows,columns } from './Data.jsx';
import Hedar from '../../Components/Hedar.jsx';

export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto", }}>
           <Hedar titel={"CONTACTS"} suptitel={"list of contacts for future reference"}/>
      <DataGrid
       slots={{
    toolbar: GridToolbar,
  }}
       rows={rows} columns={columns} />
    </Box>
  )
}
