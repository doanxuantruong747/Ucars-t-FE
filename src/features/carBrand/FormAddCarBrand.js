import React, { useCallback, useEffect, useState } from 'react';
import { FormProvider, FTextField, FUploadAvatar } from "../../components/form"
import './styleCarBrand.css'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { createCarBrand, getCarBrands } from './carBrandSlice';
import { LoadingButton } from '@mui/lab';
import SelectStatus from '../../components/selectStatus/SelectStatus';


const CreateCarBrandSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    description: yup.string().required("description is required"),
});




export default function FormAddCarBrand({ handleClose }) {
    const { isLoading, CarBrandError } = useSelector((state) => state.carBrand);
    const [currentStatus, setcurrentStatus] = useState("Active");

    const defaultValues = {
        name: "",
        image: "",
        description: "",
        status: currentStatus,
    }

    const methods = useForm({
        resolver: yupResolver(CreateCarBrandSchema),
        defaultValues
    });

    const { handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const dispatch = useDispatch();

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                setValue(
                    "image",
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
            }
        },
        [setValue]
    );


    useEffect(() => {
        if (CarBrandError === true)
            setTimeout(() => {
                handleClose()
            }, 2200);
    }, [CarBrandError, handleClose])


    const onSubmit = (data) => {
        const page = 1
        const { name, image, description } = data
        dispatch(createCarBrand({ name, image, description, status: currentStatus }))

        setTimeout(() => {
            dispatch(getCarBrands({ page }))
        }, 2000)
    };


    return (

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={3} sx={{ fontFamily: "Poppins" }}>

                <Grid item xs={12} >
                    <Typography sx={{
                        fontWeight: 600
                    }}>Brand Logo
                    </Typography>

                    <Divider sx={{ mt: "12px" }} />

                    <Box sx={{ display: "flex", mt: "16px" }}>
                        <FUploadAvatar
                            name="image"
                            accept="image/*"
                            maxSize={3145728}
                            onDrop={handleDrop}
                        />
                    </Box>

                </Grid>

                <Grid >

                    <Typography sx={{
                        fontWeight: 600,
                        mt: "36px",
                        ml: "24px"
                    }}>Brand Details</Typography>

                    <Divider sx={{ mt: "12px", width: "550px", ml: "24px" }} />

                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <Typography sx={{
                                fontWeight: 400, color: "#8C8C8C", mt: "12px", ml: "24px"
                            }}>Brand Name</Typography>

                            <Box sx={{ ml: "24px", mt: "4px", width: "240px", height: "40px" }}>
                                <FTextField
                                    name="name" placeholder="Input Content" />

                                {(CarBrandError === false)
                                    ? (<Typography sx={{
                                        fontSize: "11px",
                                        color: "#ef5350",
                                    }}>* Car Brand already exists</Typography>)
                                    : ""
                                }

                            </Box>
                        </Box>

                        <Box sx={{ ml: "32px", mt: "12px" }}>
                            <Typography sx={{
                                fontWeight: 400,
                                color: "#8C8C8C",
                                mt: "4px"
                            }}>Brand Status</Typography>

                            <Box sx={{ width: 131, height: 48, mt: "12px" }}>

                                <SelectStatus setcurrentStatus={setcurrentStatus} />

                            </Box>
                        </Box>

                    </Box>

                    <Typography sx={{
                        fontWeight: 400,
                        color: "#8C8C8C",
                        mt: "24px",
                        ml: "24px"
                    }}>Brand Description</Typography>

                    <Stack sx={{ ml: "24px", width: "550px" }}>
                        <FTextField name="description" placeholder="Input Content"
                            multiline
                            rows={3}
                        />
                    </Stack>

                </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>

                <Button onClick={handleClose} variant="outlined"
                    sx={{ mr: "12px", width: "83px", height: "40px" }}
                ><img alt='' src='icon/btn-cancel.png' /></Button>

                <LoadingButton
                    sx={{ width: "127px", height: "40px" }}
                    variant="text"
                    type="submit"
                    loading={isLoading || isSubmitting}
                >
                    <img alt='' src='icon/btn-create.png' />
                </LoadingButton>

            </Box>
        </FormProvider>


    );
}
