import { Stack } from "@mui/material";
import React from "react";
import { NavTypo } from "../styledComponents/SidebarStyledComp";
const Footer = () => {
    return (
        <Stack pt="23px" direction="row" spacing="6px" justifyContent="center">
            <NavTypo onClick={() => console.log("About")}>About</NavTypo>
            <NavTypo onClick={() => console.log("Help")}>Help</NavTypo>
            <NavTypo onClick={() => console.log("Terms")}>Terms</NavTypo>
            <NavTypo onClick={() => console.log("Privacy")}>Privacy</NavTypo>
            <NavTypo
                sx={{
                    cursor: "text",
                    "&:hover": {
                        textDecoration: "none",
                    },
                }}
            >
                @2022 Bencil.
            </NavTypo>
        </Stack>
    );
};

export default Footer;
