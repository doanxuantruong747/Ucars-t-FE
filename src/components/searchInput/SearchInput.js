import React, { useState } from "react";

import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


function SearchInput({ handleSubmit }) {
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(searchQuery);
    };

    return (
        <form onSubmit={onSubmit}>
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    backgroundColor: "#F1F1F1",
                    borderRadius: "99999px",
                    border: "0",
                    height: "40px",
                    width: "240px"
                }}>
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
                    placeholder=" Search car brand"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    style={{
                        marginLeft: "40px",
                        width: "160px",
                        backgroundColor: "#F1F1F1",
                        border: "0 solid #F1F1F1",

                    }}


                />
            </div>

        </form>
    );
}

export default SearchInput;
