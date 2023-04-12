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
    FormHelperTextFieldStyle,
} from "../styledComponents/LogSignPopupStyledComp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";
import { signupBodyValidationSchema } from "../validation/user";
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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const [signupForm, setSignupForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profession: [],
        birthDate: "",
        getEmails: false,
    });
    const handleChange = (event) => {
        if (event.target.name === "getEmails") {
            setSignupForm({
                ...signupForm,
                [event.target.name]: event.target.checked,
            });
        } else {
            setSignupForm({
                ...signupForm,
                [event.target.name]: event.target.value,
            });
        }
    };
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const { error } = signupBodyValidationSchema.validate(signupForm, {
            abortEarly: false,
        });
        if (error) {
            setErrors(
                error.details.reduce((acc, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {})
            );
            console.log(errors, "aaaaa");
        } else {
            // proceed with creating account
            console.log("valid form");
        }
        console.log("this is submit button", signupForm);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    width: "480px",
                    borderRadius: "5px",
                    p: "15px 51px 10px 51px",
                    display: "block",
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
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    "& .MuiInputBase-root": {
                        height: "50px",
                        marginTop: "8px",
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
                        name="firstName"
                        onChange={handleChange}
                        value={signupForm.firstName}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        FormHelperTextProps={{
                            style: FormHelperTextFieldStyle,
                        }}
                        sx={{ width: "49%" }}
                    />
                    <TextField
                        id="LastName"
                        placeholder="Last Name"
                        type="text"
                        variant="outlined"
                        name="lastName"
                        onChange={handleChange}
                        value={signupForm.lastName}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        FormHelperTextProps={{
                            style: FormHelperTextFieldStyle,
                        }}
                        sx={{ width: "49%" }}
                    />
                </Box>
                <TextField
                    placeholder="Email"
                    type="email"
                    fullWidth={true}
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    value={signupForm.email}
                    error={!!errors.email}
                    helperText={errors.email}
                    FormHelperTextProps={{
                        style: FormHelperTextFieldStyle,
                    }}
                />
                <FormControl
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                >
                    <OutlinedInput
                        name="password"
                        onChange={handleChange}
                        value={signupForm.password}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <IconButton
                                onClick={handleClickShowPassword}
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
                    {errors.password && (
                        <FormHelperText sx={FormHelperTextFieldStyle}>
                            {errors.password}
                        </FormHelperText>
                    )}
                </FormControl>
                <FormControl
                    variant="outlined"
                    fullWidth
                    error={!!errors.confirmPassword}
                >
                    <OutlinedInput
                        name="confirmPassword"
                        onChange={handleChange}
                        value={signupForm.confirmPassword}
                        type={showConfirmPassword ? "text" : "password"}
                        endAdornment={
                            <IconButton
                                onClick={handleClickShowConfirmPassword}
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
                    {errors.confirmPassword && (
                        <FormHelperText sx={FormHelperTextFieldStyle}>
                            {errors.confirmPassword}
                        </FormHelperText>
                    )}
                </FormControl>
                <TextField
                    name="username"
                    onChange={handleChange}
                    value={signupForm.username}
                    error={!!errors.username}
                    helperText={errors.username}
                    FormHelperTextProps={{
                        style: FormHelperTextFieldStyle,
                    }}
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

                <FormControl fullWidth error={!!errors.profession}>
                    {signupForm.profession.length === 0 && (
                        <InputLabel
                            shrink={false}
                            sx={{
                                opacity: "65%",
                                lineHeight: "30px",
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
                        name="profession"
                        value={signupForm.profession}
                        onChange={handleChange}
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
                                    checked={
                                        signupForm.profession.indexOf(name) > -1
                                    }
                                    size="small"
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.profession && (
                        <FormHelperText sx={FormHelperTextFieldStyle}>
                            {errors.profession}
                        </FormHelperText>
                    )}
                </FormControl>
                <TextField
                    name="birthDate"
                    value={signupForm.birthDate}
                    onChange={handleChange}
                    error={!!errors.birthDate}
                    helperText={errors.birthDate}
                    FormHelperTextProps={{
                        style: FormHelperTextFieldStyle,
                    }}
                    variant="outlined"
                    fullWidth
                    label="Birth Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ mt: "8px", height: "53px" }}
                />

                <FormControlLabel
                    sx={{ mt: "10px", color: "black", fontSize: "16px" }}
                    control={
                        <Checkbox
                            name="getEmails"
                            checked={signupForm.getEmails}
                            onChange={handleChange}
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
            <Box sx={{ textAlign: "center", mt: "20px" }}>
                <Typography
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
