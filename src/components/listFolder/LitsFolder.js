import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function LitsFolder() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, mt: "22px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <img alt='icon-folder' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/jagoobubuxtwdo01eyky.png'
                        style={{ marginLeft: "30px", height: "16px", width: "15px" }}
                    />
                </ListItemIcon>

                <ListItemText
                    sx={{ color: "#8C8C8C", ml: "18px", fontFamily: "Source Sans Pro", fontWeight: 400, fontSize: "18px" }}
                >Folder
                </ListItemText>

                {open ? <ExpandLess sx={{ color: "#8C8C8C" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit sx={{ mt: "19px" }}>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon />
                        <ListItemText sx={{ ml: 0.5, color: "#8C8C8C" }} >
                            Menu item
                        </ListItemText>
                    </ListItemButton>
                </List>

                <List component="div" disablePadding sx={{ mt: "19px" }}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon />
                        <ListItemText sx={{ ml: 0.5, color: "#8C8C8C" }} >
                            Menu item
                        </ListItemText>
                    </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{ mt: "19px" }}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon />
                        <ListItemText sx={{ ml: 0.5, color: "#8C8C8C" }} >
                            Menu item
                        </ListItemText>
                    </ListItemButton>
                </List>


            </Collapse>

            <ListItemButton sx={{ mt: "37px" }}>
                <ListItemIcon>
                    <img alt='icon-folder' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/jagoobubuxtwdo01eyky.png'
                        style={{ marginLeft: "30px", height: "16px", width: "15px" }}
                    />
                </ListItemIcon>

                <ListItemText
                    sx={{ color: "#8C8C8C", ml: "18px", fontFamily: "Source Sans Pro", fontWeight: 400, fontSize: "18px" }}
                >Tasks
                </ListItemText>
            </ListItemButton>

            <ListItemButton sx={{ mt: "37px" }}>
                <ListItemIcon>
                    <img alt='icon-folder' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/jagoobubuxtwdo01eyky.png'
                        style={{ marginLeft: "30px", height: "16px", width: "15px" }}
                    />
                </ListItemIcon>

                <ListItemText
                    sx={{ color: "#8C8C8C", ml: "18px", fontFamily: "Source Sans Pro", fontWeight: 400, fontSize: "18px" }}
                >Modules
                </ListItemText>
            </ListItemButton>

            <ListItemButton sx={{ mt: "37px" }}>
                <ListItemIcon>
                    <img alt='icon-folder' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/jagoobubuxtwdo01eyky.png'
                        style={{ marginLeft: "30px", height: "16px", width: "15px" }}
                    />
                </ListItemIcon>

                <ListItemText
                    sx={{ color: "#8C8C8C", ml: "18px", fontFamily: "Source Sans Pro", fontWeight: 400, fontSize: "18px" }}
                >Notification
                </ListItemText>
            </ListItemButton>
        </List>
    );
}