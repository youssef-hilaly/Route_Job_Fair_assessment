import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors'

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
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
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

function Sidebar({ open, handleDrawerClose }) {
    const navigate = useNavigate();
    let location = useLocation();
    const theme = useTheme();

    const pagesList = [{ text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Invoices Balances", icon: <DescriptionOutlinedIcon />, path: "/invoices" },
    { text: "Line Chart", icon: <ShowChartOutlinedIcon />, path: "/line" },
    ];

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Avatar alt='profile image'
                sx={{ mx: 'auto', width: open ? 88 : 44, height: open ? 88 : 44, transition: '0.30s', my: 1, border: '4px solid black' }} src='data:image/jpeg;base64,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' />
            <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: '0.30s' }}>User Name</Typography>
            <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: '0.30s', color: theme.palette.info.main }}>Admin</Typography>


            <Divider />
            <List>
                {pagesList.map((item, idx) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block', my: 1.5 }}>
                        <ListItemButton
                            onClick={() => { navigate(item.path) }}
                            sx={{
                                marginY: 5,
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor:
                                    location.pathname === item.path ? theme.palette.mode === 'light' ? grey[400] : grey[800] : 'inherit',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar