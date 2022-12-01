import * as React from 'react';
import './drawerLesft.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { AppBar } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import LitsFolder from '../../components/listFolder/LitsFolder';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DrawerLeft() {

    const [open, setOpen] = React.useState(true);

    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}
                sx={{ backgroundColor: "#fff", height: "64px", width: "100%" }}>
                <Toolbar >

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon sx={{ color: "#616161" }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: "center" }}>

                        <IconButton
                            sx={{ mr: "21px", height: "21px", width: "21px" }}
                        ><InfoOutlinedIcon /></IconButton>



                        <img alt="" src='icon/bell.png'
                            style={{
                                width: "15px",
                                height: "20px",
                                marginRight: "20px"
                            }}
                        />

                        <img alt="" src='icon/Ellipse.png'
                            style={{
                                width: "32px",
                                height: "32px",
                                marginRight: "8px"
                            }}
                        />

                        <span style={{
                            fontFamily: "Poppins",
                            fontSize: '14px',
                            color: "#616161",
                            marginRight: "12px"
                        }}>Admin</span>

                        <img alt="" src='icon/arow-down.png'
                            style={{
                                width: "8px",
                                height: "5px",
                                marginRight: "28px"
                            }}
                        />

                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer position="fixed"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#323435',
                        width: 240,

                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <span style={{ width: "100%", marginTop: "22px", marginLeft: "16px" }}>
                        <img onClick={() => { navigate('/') }}
                            style={{ width: "102px", cursor: "pointer" }}
                            alt='logo'
                            src='icon/UCARSLogo.png'></img>
                    </span>

                    <IconButton
                        sx={{ mt: "29px", mr: "26px", width: "17px", height: "13px" }}
                        onClick={handleDrawerClose}>
                        <img alt='' src='icon/menu.png' />
                    </IconButton>
                </DrawerHeader>

                <button className='btn'>
                    <span className='btn-icon'>
                        <img alt='' src='icon/clarity_car-line.png'
                            style={{ width: '20px', height: "20px" }}
                        />
                    </span>

                    <span className='btn-text'>Car Brand</span>
                </button>

                <LitsFolder />


                <Box sx={{ mt: "95px" }}>
                    <div
                        style={{
                            marginLeft: "16px",
                            height: "1px",
                            width: "208px",
                            backgroundColor: "#8C8C8C",

                        }}
                    />

                    <Box sx={{ mt: "30px" }}>
                        <img alt='' src='icon/setting.png'
                            style={{ width: "16px", height: "17px", marginLeft: "50px" }}
                        />
                        <span
                            style={{
                                marginLeft: "20px",
                                fontFamily: "Source Sans Pro",
                                fontWeight: 400,
                                fontSize: "18px",
                                color: "#8C8C8C"
                            }}
                        >Setting</span>
                    </Box>

                </Box>


            </Drawer>

        </Box>
    );
}