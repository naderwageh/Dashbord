import { Stack, useTheme } from "@mui/material";
import Card from "./Card.jsx"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import { data1, data2, data3, data4 } from "./Data.jsx";
export default function Row1() {
  const them = useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{ xs: "center", sx: "space-between" }}>
    
      <Card icone={<EmailOutlinedIcon sx={{fontSize:"23px",color:them.palette.secondary.main}} />} titel={"12,56"} suptitel={"Email Send"} data={data1} scheme={"accent"} increase={"+14%"} />
      <Card icone={<PointOfSaleOutlinedIcon sx={{fontSize:"23px",color:them.palette.secondary.main}} />} titel={"345,56"} suptitel={"Email Send"} data={data2} scheme={"dark2"}  increase={"+16%"} />
      <Card icone={<PersonAddAlt1OutlinedIcon sx={{fontSize:"23px",color:them.palette.secondary.main}} />} titel={"257,56"} suptitel={"Email Send"} data={data3} scheme={"paired"}  increase={"+17%"} />
      <Card icone={<TrafficOutlinedIcon sx={{fontSize:"23px",color:them.palette.secondary.main}} />} titel={"175,56"} suptitel={"Email Send"} data={data4} scheme={"pastel1"}  increase={"+18%"} />
    </Stack>
  )
}
