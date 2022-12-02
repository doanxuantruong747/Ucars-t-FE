import React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box } from '@mui/system';
import FormAddCarBrand from './FormAddCarBrand';


export default function AddCarBrand({ setOpen, open }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Dialog open={open} onClose={handleClose} sx={{ fontFamily: "Poppins", }} >

            <DialogTitle sx={{
                width: "550px",
                height: "50px",
                bgcolor: "#FAFAFA",
                mb: 5, display: "flex",
                justifyContent: "space-between"
            }}>
                <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 16, color: "#232323", mb: "4px" }}>Add Car Brand</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#5F5F5F" }}>Setup new car brand</Typography>
                </Box>

                <HighlightOffIcon onClick={handleClose} sx={{
                    cursor: "pointer",
                    color: "#5F5F5F",
                    width: "32px",
                    height: "32px"
                }} />
            </DialogTitle>

            <DialogContent sx={{ mt: "16px" }}>
                <FormAddCarBrand handleClose={handleClose} />
            </DialogContent>

        </Dialog>


    );
}
