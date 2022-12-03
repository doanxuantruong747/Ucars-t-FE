import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function SelectStatusInactive({ setcurrentStatus }) {
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
  setStatus(false)
  handleClose()
 }

 const handleClickInactive = () => {
  setcurrentStatus("Inactive")
  setStatus(true)
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
     ? <img alt='inactive' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/cvsuxrhfl0xueievwiw8.png' />
     : <img alt='active' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/dnfykeepm46n946an9zv.png' />
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
    <MenuItem onClick={handleClickActive}><img alt='st-active' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/uv32gxlqugt7ftvknwbd.png' /></MenuItem>
    <MenuItem onClick={handleClickInactive}><img alt='st-inactive' src='https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/gqaj9pzpshd6xelglsum.png' /></MenuItem>
   </Menu>
  </div>
 );
}