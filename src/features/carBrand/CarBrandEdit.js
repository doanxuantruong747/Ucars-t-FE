
import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { EditCarBrand, getSingleCarBrand } from "./carBrandSlice";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Divider, IconButton, Typography } from "@mui/material";
import { FormProvider, FTextField, FUploadAvatar } from "../../components/form"
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import './styleCarBrand.css'
import SelectStatus from "../../components/selectStatus/SelectStatus";
import SelectStatusInactive from "../../components/selectStatus/SelectStatusInactive";



function CarBrandEdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { selectedCarBrand, isLoading } = useSelector((state) => state.carBrand)
    const [currentStatus, setcurrentStatus] = useState(null)


    const defaultValues = {
        name: selectedCarBrand.name,
        image: selectedCarBrand.image,
        status: selectedCarBrand.status,
        description: selectedCarBrand.description,
    }

    const methods = useForm({ defaultValues });
    const { handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = methods;

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

    const handelSave = () => {
        navigate(`/carBrand/${selectedCarBrand._id}`)
    };

    const onSubmit = (data) => {
        let { name, image, description, status } = data
        if (currentStatus) { status = currentStatus }
        else { status = selectedCarBrand.status }

        dispatch(EditCarBrand({ id: selectedCarBrand._id, name, image, description, status }));
        setTimeout(() => {
            dispatch(getSingleCarBrand(selectedCarBrand._id))
            handelSave()
        }, 2000);
    };


    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box maxWidth="sm" sx={{ ml: "50px", fontFamily: "Poppins" }}>

                <Box sx={{ display: "flex", alignItems: 'center' }}>
                    <IconButton
                        onClick={() => navigate("/")}
                        sx={{ width: "15px", height: "15px" }}>
                        <ArrowBackIosNewIcon sx={{ width: "12px", height: '12px' }} />
                    </IconButton>

                    <Typography
                        sx={{
                            ml: "16px",
                            fontWeight: 600,
                            fontSize: "24px",
                            color: "#2F465F"
                        }}
                    >Brand Detail</Typography>
                </Box>

                <Typography
                    sx={{
                        mt: "32px",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#232323"
                    }}
                >Brand Logo</Typography>

                <Divider sx={{ width: "552px", mt: "12px" }} />

                <Box sx={{ display: "flex", height: '120px', width: '120px', marginTop: '16px' }}>
                    <Box sx={{ position: "absolute", zIndex: 1 }}>
                        <FUploadAvatar
                            name="image"
                            accept="image/*"
                            maxSize={3145728}
                            onDrop={handleDrop}
                        />
                    </Box>

                </Box>

                <Typography
                    sx={{
                        mt: '36px',
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#232323"
                    }}
                >Brand Details</Typography>

                <Divider sx={{ width: "552px", mt: "12px" }} />

                <Box sx={{ display: "flex", mt: '16px' }}>
                    <Box >
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: 14,
                                color: "#8C8C8C"
                            }}
                        >Brand Name</Typography>

                        <Box sx={{
                            mt: "16px",
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#2F465F"
                        }}>
                            <FTextField name="name" />
                        </Box>

                    </Box>
                    <Box sx={{ ml: '168px' }}>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: 14,
                                color: "#8C8C8C"
                            }}
                        >Brand Status</Typography>

                        {(selectedCarBrand && selectedCarBrand.status === 'Active')
                            ? (<Box sx={{ mt: "10px" }}>
                                <SelectStatus setcurrentStatus={setcurrentStatus} />
                            </Box>)
                            : (<Box sx={{ mt: "10px" }}>
                                <SelectStatusInactive setcurrentStatus={setcurrentStatus} />
                            </Box>)
                        }

                    </Box>

                </Box>
                <Typography
                    sx={{
                        mt: "16px",
                        fontWeight: 400,
                        fontSize: '14px',
                        color: "#8C8C8C"
                    }}
                >Brand Description</Typography>
                <Typography
                    sx={{ mt: "13px", fontSize: '14px', color: "#2F465F", fontWeight: 600 }}
                >
                    <FTextField name="description"
                        multiline
                        rows={3} />

                </Typography>

                <Box sx={{ mt: '93px', display: "flex" }}>
                    <LoadingButton
                        sx={{ width: '145px', height: '40px', borderRadius: '4px' }}
                        variant="contained"
                        type="submit"
                        loading={isSubmitting || isLoading}
                    >
                        <img alt="" src="https://res.cloudinary.com/drvcdh4cx/image/upload/v1670040962/foods-store/mzqnwygd5tpw5bukqs3w.png" />
                    </LoadingButton>


                </Box>
            </Box>
        </FormProvider>

    );
}

export default CarBrandEdit;