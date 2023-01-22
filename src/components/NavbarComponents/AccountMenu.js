import React from "react";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { MenuItemStyled } from "../../styledComponents/NavbarStyledComp.js.js";
import { Link } from "react-router-dom";

const AccountMenu = ({ anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);

    return (
        <Menu
            sx={{ mt: 0.5 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    ml: 1,
                    borderRadius: "7.20942px",
                    width: "127px",
                    boxShadow: "0px 3.20419px 5.20419px rgba(0, 0, 0, 0.25)",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
            transformOrigin={{
                horizontal: "right",
                vertical: "top",
            }}
            anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
            }}
        >
            <MenuItemStyled sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
                <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "#000" }}
                >
                    My Profile
                </Link>
            </MenuItemStyled>
            <MenuItemStyled
                sx={{ paddingTop: "8.32px", paddingBottom: "8.32px" }}
            >
                Setting
            </MenuItemStyled>
            <MenuItemStyled
                sx={{ paddingTop: "9.23px", paddingBottom: "9.23px" }}
            >
                <Link
                    to="/feedback"
                    style={{ textDecoration: "none", color: "#000" }}
                >
                    Feedback
                </Link>
            </MenuItemStyled>
            <Divider />
            <MenuItemStyled>Logout</MenuItemStyled>
        </Menu>
    );
};

export default AccountMenu;
