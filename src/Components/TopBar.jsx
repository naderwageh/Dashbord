/* eslint-disable react/prop-types */
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, IconButton, Box, useTheme, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 240;
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
// import { Delete } from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';




const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export default function TopBar({ open, handleDrawerOpen, setmood }) {
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    marginLeft: drawerWidth,
                    width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
            },
        ],
    }));
    const theme = useTheme()
    return (

        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box flexGrow={1} />
                <Stack direction={"row"}>


                    {theme.palette.mode === "light" ?
                        (<IconButton onClick={() => {
                            localStorage.setItem("currenmode", theme.palette.mode === "dark" ? "light" : "dark")
                            setmood((prevmode) =>
                                prevmode === "light" ? "dark" : "light"
                            )

                        }} color="inherit">
                            <LightModeOutlinedIcon />
                        </IconButton>)
                        : (<IconButton onClick={() => {
                            localStorage.setItem("currenmode", theme.palette.mode === "dark" ? "light" : "dark")
                            setmood((prevmode) =>
                                prevmode === "light" ? "dark" : "light"
                            )
                        }
                        }
                            color="inherit">
                            <DarkModeOutlinedIcon />
                        </IconButton>)}
                    <IconButton color="inherit">
                        <NotificationsActiveOutlinedIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit">
                        <PermIdentityOutlinedIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}