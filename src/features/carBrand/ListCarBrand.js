import { Radio, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fDate } from '../../untils/formatTime';
import { getCarBrands } from './carBrandSlice';

function ListCarBrand({ filterName, page }) {

    const { listCarBrands } = useSelector((state) => state.carBrand)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect((name) => {
        name = filterName
        dispatch(getCarBrands({ page, name }));
    }, [dispatch, page, filterName]);

    return (
        <TableContainer sx={{ width: "auto", overflowX: "auto" }}>
            <Table>

                {
                    listCarBrands.map((brand) => (

                        <TableRow key={brand._id}>
                            <TableCell >
                                <Radio sx={{
                                    ml: "10px",
                                    height: "24px",
                                    width: "24px"
                                }} />
                            </TableCell>

                            <TableCell >
                                <img alt='logo' src={brand.image || ""}
                                    style={{
                                        marginLeft: "-30px",
                                        width: "64px", height: "64px",
                                        cursor: "pointer"
                                    }} />

                            </TableCell>

                            <TableCell>
                                {brand.status === 'Active'
                                    ? (<div
                                        style={{
                                            marginLeft: "-30px",
                                            height: "64px",
                                            width: "2px",
                                            backgroundColor: "#0FC97B",
                                        }}
                                    />)
                                    : (<div
                                        style={{
                                            marginLeft: "-30px",
                                            height: "64px",
                                            width: "2px",
                                            backgroundColor: "#5F5F5F",

                                        }}
                                    />)
                                }

                            </TableCell>

                            <TableCell>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>

                                    <Typography
                                        sx={{
                                            ml: "-30px",
                                            fontSize: 20,
                                            fontWeight: 500,
                                            color: "#2F465F",
                                            fontFamily: "Poppins"
                                        }}>
                                        {brand.name || ""}
                                    </Typography>

                                    <Box sx={{ display: "flex" }}>
                                        <Typography
                                            sx={{
                                                ml: "-30px",
                                                fontSize: 14,
                                                color: "#8C8C8C",
                                                fontWeight: 400,
                                                fontFamily: "Poppins"
                                            }}>
                                            {brand.description || ""}
                                        </Typography>

                                        <div
                                            style={{
                                                marginLeft: "16px",
                                                height: "16px",
                                                width: "1.5px",
                                                backgroundColor: "#E3E3E3",

                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                ml: "16px",
                                                color: "#0F5EDD",
                                                fontWeight: 600,
                                                fontSize: 14,
                                                fontFamily: "Poppins"
                                            }}>
                                            {brand.moldesId.name || ""}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>

                            <TableCell>
                                <Box sx={{ mr: "70px", display: "flex", flexDirection: "column" }}>
                                    <Typography
                                        sx={{
                                            mb: "12px",
                                            color: "#2F465F",
                                            fontWeight: 500,
                                            fontSize: "14px",
                                            fontFamily: "Poppins"
                                        }}
                                    >Last Update</Typography>
                                    <Typography
                                        sx={{ color: "#8C8C8C", fontWeight: 400, fontSize: 14, fontFamily: "Poppins" }}
                                    >{fDate(brand.updatedAt) || ""}</Typography>

                                </Box>
                            </TableCell>

                            <TableCell>
                                {
                                    brand.status === 'Active'

                                        ? <div style={{
                                            marginRight: "50px",
                                            display: "flex", alignItems: "center", justifyContent: "center", width: "111px", height: "40px",
                                            backgroundColor: "#FAFAFA", color: '#1F7B4D', fontWeight: 500, borderRadius: "5px"
                                        }}>

                                            <div style={{ backgroundColor: '#1F7B4D', width: "12px", height: "12px", borderRadius: "50%" }}></div>
                                            <span style={{ marginLeft: "10px" }}>Active</span> </div>

                                        : <div style={{
                                            marginLeft: "",
                                            display: "flex", alignItems: "center", justifyContent: "center", width: "111px", height: "40px",
                                            backgroundColor: "#FAFAFA", color: '#1F7B4D', fontWeight: 500, borderRadius: "5px"
                                        }}>

                                            <div style={{ backgroundColor: '#5F5F5F', width: "12px", height: "12px", borderRadius: "50%" }}></div>
                                            <span style={{ color: "#5F5F5F", marginLeft: "10px" }}>Inactive</span> </div>
                                }
                            </TableCell>

                            <TableCell>
                                <div onClick={() => navigate(`/carBrand/${brand._id}`)}
                                    style={{
                                        marginLeft: "",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        width: "111px", height: "40px", backgroundColor: "#B4B4B4", color: '#232323', fontWeight: 500, borderRadius: "5px",
                                        cursor: "pointer"
                                    }}>
                                    <span >View Detail</span> </div>
                            </TableCell>


                        </TableRow>
                    ))
                }

            </Table>
        </TableContainer>



    )
}

export default ListCarBrand