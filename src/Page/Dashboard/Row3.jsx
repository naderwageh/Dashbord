
import {  Paper, Stack, Typography, useTheme } from "@mui/material";

import Pie from "../pieChart/Pie.jsx";
import Bar from "../Bar/Bar.jsx";
import Gog from "../Gogeraphy/Gog.jsx";




export default function Row3() {
  const Theme = useTheme();
  return (
    <Stack direction={"row"} gap={1.5} mt={2} flexWrap={"wrap"}>
      <Paper sx={{flexGrow:1,minWidth:"300px", width: "28%" }}>
        <Typography
          color={Theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Compaign
        </Typography>
        <Pie isDahbord={true} />
        <Typography

          sx={{ mt: "15px" }}
          align="center"
          variant="h6"

        >
          $48,352 revenue geneertatrd
        </Typography>
        <Typography
          align="center"
          pb={3}
          px={0.7}
          variant="body2"
          fontWeight="600"
        >
          Icnludes extra expenditures and costs
        </Typography>
      </Paper>


      <Paper sx={{flexGrow:1,minWidth:"300px", width: "33%" }}>
      <Typography
          color={Theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
      <Bar isDahbord={true}/>
      </Paper>
      <Paper sx={{flexGrow:1,minWidth:"300px", width: "33%" }}>
      <Gog isDahbord={true} />
      </Paper>
    </Stack>
  )
}
