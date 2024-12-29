import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Li from "../Line/Li";
import { transactions } from "./Data";


export default function Row2() {
  const theme = useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{  maxWidth: 900, flexGrow: 1,minWidth:"400px"}}>
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"}>
          <box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              fontWeight={"bold"}
              p={1.2}
              variant="h6">
              revenue generated
            </Typography>
            <Typography variant="body2" ml={4}>$59,342.32</Typography>
          </box>
          <box>
            <IconButton sx={{ mr: 3 }}><DownloadOutlined /></IconButton>
          </box>
        </Stack>

        <Li isdahbord={true} />
      </Paper>












      <Box sx={{ overflow:"auto",maxheight:380, flexGrow: 1, minWidth: "280px" }}>
        <Paper>
          <Typography color={theme.palette.secondary.main} fontWeight={"bold"} p={1.2} variant="h6">
            recent transactions
          </Typography>

        </Paper>


        {transactions.map(() => {
          return (

            // eslint-disable-next-line react/jsx-key
            <Paper sx={{ mt: 1, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <Box p={1.2}>
                <Typography variant="body2" fontWeight="600">test11
                </Typography>
                <Typography variant="body2">test22</Typography>
              </Box>
              <Typography variant="body2">test33</Typography>
              <Typography variant="body2" borderRadius={1.4} p={1} bgcolor={theme.palette.error.main}>test55</Typography>

            </Paper>
          )


        })}






      </Box>
    </Stack>
  )
}