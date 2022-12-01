
import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchInput from "../../components/searchInput/SearchInput";
import ListCarBrand from "../../features/carBrand/ListCarBrand";
import './homPage.css'

function HomePage() {
    const [filterName, setFilterName] = useState("");
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);



    const handleSubmit = (searchQuery) => {
        setFilterName(searchQuery);
        setPage(1)
    };

    const handleClickOpen = () => {
        setOpen(true)
    };
    return (
        <Box sx={{ mt: "29px", display: "flex", flexDirection: "column", fontFamily: "Poppins" }}>
            {/* <CreateCarBrand setOpen={setOpen} open={open} /> */}

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>
                    <span className="text-car-list">CAR BRANDS LIST</span>

                    <select className="select-box">
                        <option>View All </option>
                        <option>Last Updated</option>
                        <option>Brand Name</option>
                        <option>Number of Models</option>
                    </select>

                    <Box sx={{ ml: "72px" }}>
                        <SearchInput handleSubmit={handleSubmit} />
                    </Box>
                </Box>


                <button className="btn-create">
                    <img alt="" src='icon/Vector.png'
                        style={{ width: "10px", height: "10px", marginLeft: "5px" }}
                    />
                    <span className="btn-text">Add Brand</span>
                </button>

            </Box>

            <Box sx={{ mt: "33px", ml: "24px" }}>
                <ListCarBrand filterName={filterName} page={page} />
            </Box>
        </Box>
    );
}



export default HomePage;