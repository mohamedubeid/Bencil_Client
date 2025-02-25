import React, { useContext, useState } from "react";
import {
    AppBar,
    InputBase,
    Button,
    Badge,
    IconButton,
    Stack,
    Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
    Search,
    StyledToolbar,
    UploadButton,
    UserAvatar,
    Logo,
    LogoImage,
    BadgeStyle,
} from "../styledComponents/NavbarStyledComp.js";
import authContext from "../auth-context.js";
import { theme } from "../theme.js";
import AccountMenu from "./NavbarComponents/AccountMenu.js";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup.js";
import SignupPopup from "./SignupPopup";

const Navbar = () => {
    const auth = useContext(authContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //login pop up page
    const [openPopup, setOpenPopup] = useState(false);

    const handleClickOpenLoginPopup = () => {
        setOpenPopup(true);
    };

    const handleCloseLoginPopup = () => {
        setOpenPopup(false);
    };

    //signup pop up page
    const [openSignupPopup, setOpenSignupPopup] = React.useState(false);

    const handleClickOpenSignupPopup = () => {
        setOpenSignupPopup(true);
    };

    const handleCloseSignupPopup = () => {
        setOpenSignupPopup(false);
    };

    return (
        <AppBar
            sx={{
                position: "sticky",
                paddingRight: "0px!important",
                maxWidth: {
                    xs: "95%",
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                },
                m: "auto",
                p: 0,
            }}
            color="background"
        >
            <StyledToolbar disableGutters>
                <Link to="/">
                    <Logo src="images/logo.svg" alt="logo" />
                </Link>
                <Box
                    sx={{
                        marginRight: { xs: "5px", md: "0" },
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <Link to="/">
                        <LogoImage
                            src="images/logo_image.png"
                            alt="logo_image"
                        />
                    </Link>
                </Box>
                <Search
                    sx={{
                        marginRight: { xs: "auto", md: "0px", lg: "30px" },
                        width: { xs: "35%", md: "29%" },
                    }}
                >
                    <InputBase
                        sx={{
                            padding: "8px 1rem",
                            fontSize: "13px",
                        }}
                        fullWidth
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                        endAdornment={<SearchIcon sx={{ opacity: "0.4" }} />}
                    />
                </Search>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{ xs: "0px", sm: "3px", md: "-5px", lg: "25px" }}
                >
                    <Stack
                        direction="row"
                        spacing={{ xs: "5px", sm: "20px" }}
                        alignItems="center"
                    >
                        <UploadButton variant="outlined" href="/upload">
                            Upload
                        </UploadButton>
                        <Button
                            variant="contained"
                            sx={{
                                display: auth.status ? "none" : "inline",
                                [theme.breakpoints.down("sm")]: {
                                    padding: "10px 20px",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                },
                            }}
                            onClick={handleClickOpenLoginPopup}
                        >
                            Login
                        </Button>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={{ xs: "-5px", sm: "0px" }}
                        sx={{ display: !auth.status ? "none" : "flex" }}
                    >
                        <IconButton
                            disableRipple
                            onClick={() =>
                                console.log("this is notifications icon button")
                            }
                        >
                            <Badge color="primary">
                                <NotificationsIcon
                                    color="action"
                                    sx={BadgeStyle}
                                />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <UserAvatar
                                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Mohamed Ubeid"
                            />
                        </IconButton>
                    </Stack>
                </Stack>
            </StyledToolbar>
            <AccountMenu anchorEl={anchorEl} handleClose={handleClose} />
            <LoginPopup
                login={auth.login}
                open={openPopup}
                handleClose={handleCloseLoginPopup}
                handleClickOpenSignupPopup={handleClickOpenSignupPopup}
            />
            <SignupPopup
                open={openSignupPopup}
                handleClose={handleCloseSignupPopup}
                handleClickOpenLoginPopup={handleClickOpenLoginPopup}
            />
        </AppBar>
    );
};

export default Navbar;
