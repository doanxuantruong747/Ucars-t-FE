
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { getSingleCarBrand } from "./carBrandSlice";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Divider, IconButton, Typography } from "@mui/material";
import './styleCarBrand.css'
import DialogDeleteCarBrand from "./DialogDeleteCarBrand";


function CarBrandDetail() {
    const [open, setOpen] = useState(false);
    const [carBrand, setcarBrand] = useState({
        name: "loading...",
        image: "loading...",
        status: "loading...",
        description: "loading..."
    });
    const { selectedCarBrand } = useSelector((state) => state.carBrand)

    setTimeout(() => {
        if (selectedCarBrand) {
            setcarBrand(selectedCarBrand)
        }
    }, 100);


    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getSingleCarBrand(id));
    }, [dispatch, id])

    const handleClickOpen = () => {
        setOpen(true)
    };

    return (

        <Box maxWidth="sm" sx={{ ml: "50px", fontFamily: "Poppins" }}>
            <DialogDeleteCarBrand open={open} setOpen={setOpen} id={id} />
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

            <img alt="logo" src={carBrand.image}
                style={{ height: '120px', width: '120px', marginTop: '16px' }}
            />

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

                    <Typography
                        sx={{
                            mt: "16px",
                            fontWeight: 600,
                            fontSize: 16,
                            color: "#2F465F"
                        }}
                    >{carBrand.name}</Typography>
                </Box>
                <Box sx={{ ml: '168px' }}>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: 14,
                            color: "#8C8C8C"
                        }}
                    >Brand Status</Typography>

                    {carBrand.status === 'Active'
                        ? (<img alt="" src="https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/uv32gxlqugt7ftvknwbd.png"
                            style={{ marginTop: "10px" }}
                        />)
                        : (<img alt="" src="https://res.cloudinary.com/drvcdh4cx/image/upload/v1670025544/foods-store/gqaj9pzpshd6xelglsum.png"
                            style={{ marginTop: "10px" }}
                        />)
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
            >{carBrand.description}</Typography>

            <Box sx={{ mt: '93px', display: "flex" }}>
                <Button
                    sx={{ width: '145px', height: '40px', borderRadius: '4px' }}
                    variant="contained"
                    onClick={() => navigate(`/carBrand/edit/${id}`)}
                >
                    <img alt="" src="https://res.cloudinary.com/drvcdh4cx/image/upload/v1670026223/foods-store/rnsmiquhfknzwvhdcbs3.png" />
                </Button>

                <Button
                    sx={{ ml: "100px", width: '145px', height: '40px', borderRadius: '4px' }}
                    variant="contained"
                    onClick={handleClickOpen}
                >
                    <img alt="" src="https://res.cloudinary.com/drvcdh4cx/image/upload/v1670080532/foods-store/hl0dvk8wexcglxr6oyip.png" />
                </Button>

            </Box>
        </Box>

    );
}

export default CarBrandDetail;