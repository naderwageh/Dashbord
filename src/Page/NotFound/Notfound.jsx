import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"


export default function Notfound() {
    const theme=useTheme()
  return (
    <Box>
      <Typography textAlign={"center"} color={theme.palette.error.main} fontWeight={"bold"}>   there is no design yet 
      
      
      <br/>
      <br/>
      Please try agin later
      
      </Typography>

     
    </Box>
  )
}
