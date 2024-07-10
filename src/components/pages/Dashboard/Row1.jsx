import { Box } from "@mui/material";
import React from "react";
import Invoices from "../Invoices/Invoices";

const Row1 = () => {
    return (
        <Box sx={{ height: 150, marginTop: 3 }}>
            <Invoices />
        </Box>

    );
};

export default Row1;