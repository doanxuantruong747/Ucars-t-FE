import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DrawerLeft from "../pages/DrawerLesft";


function MainLayout() {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>

            <DrawerLeft />
            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Box sx={{ mt: 10 }} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;