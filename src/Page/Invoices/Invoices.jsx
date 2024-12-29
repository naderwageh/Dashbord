
import { DataGrid, } from '@mui/x-data-grid';
import { Box,  } from '@mui/material';
import { rows, columns } from './Data.jsx';
import Hedar from '../../Components/Hedar.jsx';
export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto", }}>
     <Hedar titel={"INVOICES"} suptitel={"list of invoices balances"}/>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection

      />
    </Box>
  )
}
