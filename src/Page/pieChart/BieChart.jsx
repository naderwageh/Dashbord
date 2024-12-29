

import { Box } from '@mui/material'
import Pie from './Pie'
import Hedar from '../../Components/Hedar'



export default function BieChart() {
   
  return (
    <Box>
        <Hedar titel={"PIE CHART"} suptitel={"pie chart more abut us"}/>
        <Pie/>
    </Box>
   
  )
}
