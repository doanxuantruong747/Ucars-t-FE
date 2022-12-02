import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function SelectStatus({ setcurrentStatus }) {
 const [anchorEl, setAnchorEl] = useState(null);
 const [status, setStatus] = useState(true);
 const open = Boolean(anchorEl);

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleClickActive = () => {
  setcurrentStatus("Active")
  setStatus(true)
  handleClose()
 }

 const handleClickInactive = () => {
  setcurrentStatus("Inactive")
  setStatus(false)
  handleClose()
 }

 return (
  <div>
   <Button
    sx={{ width: "130px", height: "34px", borderRadius: "99999px" }}
    id="fade-button"
    aria-controls={open ? 'fade-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
   >
    {status
     ? <img alt='' src='icon/Select-active.png' />
     : <img alt='' src='icon/Select-inactive.png' />
    }

   </Button>
   <Menu
    id="fade-menu"
    MenuListProps={{
     'aria-labelledby': 'fade-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
   >
    <MenuItem onClick={handleClickActive}><img alt='' src='icon/status-active.png' /></MenuItem>
    <MenuItem onClick={handleClickInactive}><img alt='' src='icon/Status-inactive.png' /></MenuItem>
   </Menu>
  </div>
 );
}