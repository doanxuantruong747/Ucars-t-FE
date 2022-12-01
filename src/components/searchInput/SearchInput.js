import React, { useState } from "react";

import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { positions } from "@mui/system";

function SearchInput({ handleSubmit }) {
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchQuery);
    };

    return (
        <form onSubmit={onSubmit}>
            <Box sx={{ display: "flex", position: "relative" }}>
                <IconButton
                    sx={{
                        color: "#5F5F5F", width: "18px", height: "18px",
                        position: "absolute", top: "13px", left: "15px"
                    }}
                    type="submit"
                >
                    <SearchIcon />
                </IconButton>

                <input
                    value={searchQuery}
                    placeholder="                 Search car brand"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    style={{

                        backgroundColor: "#F1F1F1",
                        borderRadius: "99999px",
                        border: "0",
                        height: "40px",
                        width: "240px"
                    }}


                />
            </Box>

        </form>
    );
}

export default SearchInput;
