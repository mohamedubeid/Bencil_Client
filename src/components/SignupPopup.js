import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import {
    primaryButton,
    secondaryButton,
    MenuProps,
    itemStyle,
} from "../styledComponents/LogSignPopupStyledComp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { scrollbarStyles } from "../styledComponents/GlobalStyledComp";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";

const names = [
    "Businessperson",
    "Developer/Programmer",
    "Designer",
    "Marketeer",
    "Sales Person",
    "Investor",
    "Miriam Wagner",
    "Accountant/Bookkeeper",
];

const SignupPopup = ({ open, handleClose, handleClickOpenLoginPopup }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [personName, setPersonName] = useState([]);

    const handleSelect = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    width: "500px",
                    borderRadius: "5px",
                    p: "15px 51px 16px 51px",
                    overflow: "auto",
                    display: "block",
                    ...scrollbarStyles,
                },
            }}
        >
            <DialogTitle
                sx={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "30px",
                }}
                color="primary"
            >
                Sign up to Bencil
            </DialogTitle>
            <Box
                component="form"
                sx={{
                    "& .MuiFormControl-root": {
                        height: "45px",
                        marginTop: "8px",
                        overflow: "visible",
                        input: {
                            "&::placeholder": {
                                fontSize: "15px",
                                fontWeight: "400",
                            },
                        },
                    },
                }}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <TextField
                        id="FirstName"
                        placeholder="First Name"
                        type="text"
                        variant="outlined"
                        sx={{ width: "49%" }}
                    />
                    <TextField
                        id="LastName"
                        placeholder="Last Name"
                        type="text"
                        variant="outlined"
                        sx={{ width: "49%" }}
                    />
                </Box>
                <TextField
                    placeholder="Email"
                    type="email"
                    fullWidth={true}
                    variant="outlined"
                />
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{ opacity: "80%" }}
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        }
                        placeholder="Password"
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                        type={showConfirmPassword ? "text" : "password"}
                        endAdornment={
                            <IconButton
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{ opacity: "80%" }}
                            >
                                {showConfirmPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        }
                        placeholder="Confirm Password"
                    />
                </FormControl>
                <TextField
                    placeholder="username"
                    type="text"
                    fullWidth={true}
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <Typography
                                position="start"
                                sx={{ opacity: "80%", pr: "2px" }}
                            >
                                @
                            </Typography>
                        ),
                    }}
                />

                <FormControl fullWidth>
                    {personName.length === 0 && (
                        <InputLabel
                            shrink={false}
                            sx={{
                                opacity: "65%",
                                lineHeight: "15px",
                                "&.Mui-focused": {
                                    color: "black",
                                    opacity: "41%",
                                },
                            }}
                        >
                            Profession
                        </InputLabel>
                    )}
                    <Select
                        multiple
                        value={personName}
                        onChange={handleSelect}
                        input={<OutlinedInput />}
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "start",
                                    flexWrap: "wrap",
                                    height: "45px",
                                    overflow: "auto!important",
                                    gap: 0.5,
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name} sx={itemStyle}>
                                <Checkbox
                                    checked={personName.indexOf(name) > -1}
                                    size="small"
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    variant="outlined"
                    fullWidth
                    label="Birth Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <FormControlLabel
                    sx={{ mt: "5px", color: "black", fontSize: "16px" }}
                    control={
                        <Checkbox
                            // checked={checked}
                            // onChange={handleChange}
                            color="primary"
                        />
                    }
                    label="Get useful tips and updates via email"
                />
                <Button
                    sx={{ ...primaryButton }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Join Now
                </Button>
            </Box>

            <Button
                fullWidth
                variant="outlined"
                disableFocusRipple
                sx={secondaryButton}
                startIcon={<LinkedInIcon size="large" />}
            >
                Continue with Linkedin
            </Button>
            <Button
                fullWidth
                variant="outlined"
                disableElevation
                sx={secondaryButton}
                startIcon={<GoogleIcon />}
            >
                Continue with Google
            </Button>
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    mt="25px"
                    fontSize="14px"
                    fontWeight="400"
                    display="inline-block"
                >
                    Have an account?
                </Typography>
                <Typography
                    component="span"
                    color="primary"
                    fontSize="14px"
                    fontWeight="400"
                    display="inline-block"
                    ml="3px"
                    sx={{
                        cursor: "pointer",
                        "&: hover": { textDecoration: "underLine" },
                    }}
                    onClick={() => {
                        handleClose();
                        handleClickOpenLoginPopup();
                    }}
                >
                    log in
                </Typography>
            </Box>
        </Dialog>
    );
};

export default SignupPopup;
