/* eslint-disable react/prop-types */
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled, } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { BarChartOutlined, CalendarTodayOutlined, ContactSupportOutlined, HelpCenterOutlined, HomeOutlined, MapOutlined, PeopleOutlineOutlined, PersonOutline, PieChart, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar,  Tooltip,  Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Array1 = [
  { "text": "Dashboard", icone: <HomeOutlined />, "path": "/Dashboard" },
  { "text": "Manage Team", icone: <PeopleOutlineOutlined />, "path": "/Team" },
  { "text": "Contacts Information", icone: <ContactSupportOutlined />, "path": "/Contacts" },
  { "text": "Invoices ", icone: <ReceiptOutlined />, "path": "/Invoices" },
]
const Array2 = [
  { "text": "Profile Form", icone: <PersonOutline />, "path": "/Profile" },
  { "text": "Calendar", icone: <CalendarTodayOutlined />, "path": "/Calendar" },
  { "text": "FAQ Page", icone: <HelpCenterOutlined />, "path": "/Page" }
]
const Array3 = [
  { "text": "Bar Chart", icone: <BarChartOutlined />, "path": "/Bar" },
  { "text": "Pie Chart", icone: <PieChart />, "path": "/BieChart" },
  { "text": "Line Chart", icone: <TimelineOutlined />, "path": "/Line" },
  { "text": "Gogeraphy chart", icone: <MapOutlined />, "path": "/Gogeraphy" },
]


const SaidBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      
      <Avatar sx={{ mx:"auto", width: open ? "88px" : 44, height: open ? "88px" : 44, my: 1, border: "2px solid grey", transition: "0.25s" }} alt="Travis Howard" src="/.vscode/att.HuU21LsExGHHGjFco0OZ3XmNxjTNvLrbLxC_M_NQcEY.jpg" />
      <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}>Nader Wageh</Typography>
      <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }}>Admine</Typography>
     
      <Divider />



      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block'}}>


      <Tooltip title={open?null: item.text}placement='left'>   <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? theme.palette.mode==="dark" ?  grey[700]:grey[400] : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icone}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton></Tooltip>



         





           </ListItem>
        ))}
      </List>


      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>



          <Tooltip title={open?null: item.text}placement='left'><ListItemButton onClick={() => {
              navigate(item.path)
            }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? "gray" : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icone}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton></Tooltip>
            
          </ListItem>
        ))}
      </List>


      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <Tooltip title={open?null: item.text}placement='left'> <ListItemButton onClick={() => {
              navigate(item.path)
            }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? "gray" : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icone}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton></Tooltip>
           
          </ListItem>
        ))}
      </List>

    </Drawer>

  )

}
export default SaidBar;